import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { Card } from "@/components/ui/Card";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminPageHeader
        title="Settings"
        description="Organization preferences and thresholds. Static UI — no persistence."
      />
      <Card className="max-w-xl">
        <h3 className="text-section-title mb-2 font-semibold">Facility</h3>
        <p className="text-caption leading-relaxed">
          Name, timezone, and notification channels will be configured here in a future
          release.
        </p>
      </Card>
    </>
  );
}
