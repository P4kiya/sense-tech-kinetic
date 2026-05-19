import { Cpu, GitBranch, Wifi } from "lucide-react";
import { AdminPageHeader } from "@/components/dashboard/AdminPageHeader";
import { Card } from "@/components/ui/Card";

const devices = [
  { name: "Gateway North", status: "Online", ip: "192.168.1.10", firmware: "2.4.1" },
  { name: "Gateway South", status: "Online", ip: "192.168.1.11", firmware: "2.4.1" },
  { name: "Repeater Bay 2", status: "Degraded", ip: "—", firmware: "2.3.8" },
];

export default function AdminDevicesPage() {
  return (
    <>
      <AdminPageHeader
        title="Devices"
        description="Gateways and repeaters on your network. Static placeholder content."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {devices.map((d) => (
          <Card key={d.name}>
            <div className="mb-4 flex items-start justify-between gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-container/80">
                <Cpu className="h-5 w-5 text-primary" strokeWidth={2} />
              </div>
              <span
                className={
                  d.status === "Online"
                    ? "text-caption font-semibold text-success"
                    : "text-caption font-semibold text-warning"
                }
              >
                {d.status}
              </span>
            </div>
            <h3 className="text-section-title mb-1 font-semibold tracking-tight">{d.name}</h3>
            <p className="text-caption mb-4 flex items-center gap-1.5">
              <Wifi className="h-3.5 w-3.5" />
              {d.ip}
            </p>
            <p className="text-caption flex items-center gap-1.5">
              <GitBranch className="h-3.5 w-3.5" />
              Firmware {d.firmware}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
