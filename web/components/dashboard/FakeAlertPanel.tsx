"use client";

import { useState } from "react";
import { Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { alertTypes, sensors, type AlertTypeValue } from "@/lib/mock-data";

export function FakeAlertPanel() {
  const [sensorId, setSensorId] = useState(sensors[0]?.id ?? "");
  const [alertType, setAlertType] = useState<AlertTypeValue>("CRITICAL");
  const [loading, setLoading] = useState(false);

  async function handleTrigger() {
    const sensor = sensors.find((s) => s.id === sensorId);
    const payload = {
      sensorId,
      sensorName: sensor?.name,
      alertType,
      triggeredAt: new Date().toISOString(),
    };

    console.log("[FakeAlertPanel] Trigger alert:", payload);
    setLoading(true);

    try {
      const res = await fetch("/api/alerts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log("[FakeAlertPanel] API response:", data);
    } catch (err) {
      console.error("[FakeAlertPanel] Request failed:", err);
    } finally {
      setLoading(false);
    }
  }

  const selectClass =
    "rounded-xl border border-outline-variant/55 bg-surface px-3.5 py-2.5 text-[15px] text-on-surface outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/15";

  return (
    <Card elevated className="!p-6">
      <div className="mb-6 flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-warning-container/90 ring-1 ring-warning/10">
          <Zap className="h-5 w-5 text-warning" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-section-title font-semibold tracking-tight">Fake Alert Panel</h2>
          <p className="text-caption mt-0.5 leading-relaxed">
            Demo: simulate an alert for testing
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="text-overline">Sensor</span>
          <select
            value={sensorId}
            onChange={(e) => setSensorId(e.target.value)}
            className={selectClass}
          >
            {sensors.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — {s.location}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-overline">Alert type</span>
          <select
            value={alertType}
            onChange={(e) => setAlertType(e.target.value as AlertTypeValue)}
            className={selectClass}
          >
            {alertTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>

        <Button
          onClick={handleTrigger}
          disabled={loading || !sensorId}
          className="mt-1 w-full disabled:pointer-events-none disabled:opacity-45 sm:w-auto"
        >
          {loading ? "Triggering…" : "Trigger Alert"}
        </Button>
      </div>
    </Card>
  );
}
