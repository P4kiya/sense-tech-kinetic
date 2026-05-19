"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { alertTypes, sensors, type AlertTypeValue } from "@/lib/mock-data";

export function FakeAlertPanel() {
  const [sensorId, setSensorId] = useState(sensors[0]?.id ?? "");
  const [alertType, setAlertType] = useState<AlertTypeValue>("CRITICAL");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleTrigger() {
    const sensor = sensors.find((s) => s.id === sensorId);
    const payload = {
      sensorId,
      sensorName: sensor?.name,
      location: sensor?.location,
      alertType,
      triggeredAt: new Date().toISOString(),
    };

    console.log("[FakeAlertPanel] Déclenchement alerte :", payload);
    setLoading(true);

    try {
      const res = await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("[FakeAlertPanel] Réponse API :", data);
      if (data.ok) {
        setStatus("Alerte transmise — l’app mobile affichera une notification si elle est connectée.");
      } else {
        setStatus("Échec de l’envoi.");
      }
    } catch (err) {
      console.error("[FakeAlertPanel] Échec de la requête :", err);
      setStatus("Erreur réseau — vérifiez que le serveur web tourne.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card elevated className="!p-6">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-warning-container/90 ring-1 ring-warning/10">
          <Zap className="h-5 w-5 text-warning" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-section-title font-semibold tracking-tight">Panneau d&apos;alerte démo</h2>
          <p className="text-caption mt-0.5 leading-relaxed">
            Envoie une alerte vers l&apos;app mobile (prototype via API)
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-overline">Capteur</span>
          <Select value={sensorId} onChange={(e) => setSensorId(e.target.value)}>
            {sensors.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {s.location}
              </option>
            ))}
          </Select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-overline">Type d&apos;alerte</span>
          <Select
            value={alertType}
            onChange={(e) => setAlertType(e.target.value as AlertTypeValue)}
          >
            {alertTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </Select>
        </label>

        <Button
          onClick={handleTrigger}
          disabled={loading || !sensorId}
          className="mt-1 w-full disabled:pointer-events-none disabled:opacity-45 sm:w-auto"
        >
          {loading ? "Déclenchement…" : "Déclencher l'alerte"}
        </Button>
        {status ? (
          <p className="text-caption leading-relaxed text-on-surface-variant">{status}</p>
        ) : null}
      </div>
    </Card>
  );
}
