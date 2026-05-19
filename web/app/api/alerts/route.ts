import { addBridgeAlert, listBridgeAlerts, type BridgeAlertType } from "@/lib/alert-bridge-store";
import { jsonWithCors, optionsCors } from "@/lib/api-cors";

export function OPTIONS() {
  return optionsCors();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const since = searchParams.get("since");
  const alerts = listBridgeAlerts(since);

  return jsonWithCors({
    ok: true,
    alerts,
    serverTime: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const sensorId = String(body.sensorId ?? "");
  const sensorName = String(body.sensorName ?? "Capteur inconnu");
  const location = body.location ? String(body.location) : undefined;
  const alertType = (body.alertType ?? "CRITICAL") as BridgeAlertType;
  const triggeredAt = body.triggeredAt ? String(body.triggeredAt) : undefined;

  if (!sensorId) {
    return jsonWithCors({ ok: false, message: "sensorId requis" }, { status: 400 });
  }

  const alert = addBridgeAlert({
    sensorId,
    sensorName,
    location,
    alertType,
    triggeredAt,
  });

  console.log("[POST /api/alerts] Alerte prototype :", alert);

  return jsonWithCors({
    ok: true,
    message: "Alerte envoyée au pont mobile (prototype)",
    alert,
  });
}
