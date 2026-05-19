import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { Card } from "@/components/ui/Card";

export default function AdminSettingsPage() {
  return (
    <>
      <AdminPageHeader
        title="Réglages"
        description="Préférences d'organisation et seuils. Interface statique — sans persistance."
      />
      <Card className="max-w-xl">
        <h3 className="text-section-title mb-2 font-semibold">Site</h3>
        <p className="text-caption leading-relaxed">
          Le nom, le fuseau horaire et les canaux de notification seront configurés ici dans une
          prochaine version.
        </p>
      </Card>
    </>
  );
}
