import MainLayout from "../layout/MainLayout";

import SectionHeader from "../components/SectionHeader";

import PageTransition from "../components/PageTransition";

import {
  ShieldCheck,
  Bell,
  Palette,
  Database,
  LockKeyhole,
  Globe2,
  MonitorCog,
  Building2,
  Receipt,
  Wallet,
  Save,
  CheckCircle2,
} from "lucide-react";

function Settings() {

  // Settings Cards
  const settingsCards = [

    {
      title:
        "Company Profile",

      description:
        "Manage business information, GST details and ERP company identity.",

      icon:
        Building2,

      color:
        "from-yellow-400 to-amber-500",
    },

    {
      title:
        "Invoice Settings",

      description:
        "Configure invoice numbering, tax preferences and ERP billing workflow.",

      icon:
        Receipt,

      color:
        "from-cyan-400 to-blue-500",
    },

    {
      title:
        "Payment Configuration",

      description:
        "Control payment methods, settlement workflow and ledger operations.",

      icon:
        Wallet,

      color:
        "from-emerald-400 to-green-500",
    },

    {
      title:
        "Security Center",

      description:
        "Manage authentication, access permissions and operational security.",

      icon:
        ShieldCheck,

      color:
        "from-violet-400 to-purple-500",
    },

    {
      title:
        "Notifications",

      description:
        "Configure ERP alerts, trip notifications and operational updates.",

      icon:
        Bell,

      color:
        "from-pink-400 to-rose-500",
    },

    {
      title:
        "Theme & Appearance",

      description:
        "Customize dashboard appearance, layout and visual preferences.",

      icon:
        Palette,

      color:
        "from-orange-400 to-red-500",
    },

    {
      title:
        "Database & Backup",

      description:
        "Monitor backups, cloud synchronization and database recovery systems.",

      icon:
        Database,

      color:
        "from-sky-400 to-cyan-500",
    },

    {
      title:
        "Regional Preferences",

      description:
        "Manage timezone, regional settings and ERP localization preferences.",

      icon:
        Globe2,

      color:
        "from-zinc-300 to-zinc-500",
    },
  ];

  return (

    <MainLayout>

      <PageTransition>

        <div className="space-y-8">

          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 lg:p-10">

            {/* Glow */}
            <div className="absolute top-[-120px] right-[-120px] w-[260px] h-[260px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-[-120px] left-[-120px] w-[260px] h-[260px] bg-amber-500/5 blur-[120px] rounded-full"></div>

            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

              {/* Left Content */}
              <div className="max-w-3xl">

                <SectionHeader
                  label="ERP Settings"
                  title="Business Configuration Center"
                  description="Manage company identity, invoice workflow, payment systems, ERP preferences, operational security and platform configuration."
                />

              </div>

              {/* Right Actions */}
              <div className="flex flex-col gap-4">

                {/* Save Button */}
                <button className="flex items-center gap-3 px-7 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold shadow-[0_0_30px_rgba(250,204,21,0.18)] hover:scale-[1.02] transition-all duration-300">

                  <Save
                    size={18}
                  />

                  Save ERP Settings

                </button>

                {/* System Status */}
                <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/10">

                  <CheckCircle2
                    size={18}
                    className="text-emerald-400"
                  />

                  <div>

                    <p className="text-sm text-white">

                      ERP Status

                    </p>

                    <p className="text-xs text-emerald-400 mt-1">

                      All systems operational

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* Business Configuration */}
          <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

            {/* Company Information */}
            <div className="xl:col-span-2 relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[34px] p-7 backdrop-blur-2xl">

              <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-yellow-400/10 blur-[120px] rounded-full"></div>

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">

                  <div>

                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-400 font-medium">

                      ERP Business Profile

                    </p>

                    <h2 className="text-3xl font-bold text-white mt-4">

                      Company Information

                    </h2>

                  </div>

                  <div className="w-16 h-16 rounded-3xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center">

                    <Building2
                      size={28}
                    />

                  </div>

                </div>

                {/* Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Company Name */}
                  <div>

                    <label className="text-sm text-zinc-400">

                      Company Name

                    </label>

                    <input
                      type="text"
                      defaultValue="Get Me Cab"
                      className="mt-3 w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500/30 transition-all duration-300"
                    />

                  </div>

                  {/* GST Number */}
                  <div>

                    <label className="text-sm text-zinc-400">

                      GST Number

                    </label>

                    <input
                      type="text"
                      placeholder="GSTIN"
                      className="mt-3 w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500/30 transition-all duration-300"
                    />

                  </div>

                  {/* Email */}
                  <div>

                    <label className="text-sm text-zinc-400">

                      Business Email

                    </label>

                    <input
                      type="email"
                      placeholder="company@email.com"
                      className="mt-3 w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500/30 transition-all duration-300"
                    />

                  </div>

                  {/* Contact */}
                  <div>

                    <label className="text-sm text-zinc-400">

                      Contact Number

                    </label>

                    <input
                      type="text"
                      placeholder="+91"
                      className="mt-3 w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-yellow-500/30 transition-all duration-300"
                    />

                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">

                    <label className="text-sm text-zinc-400">

                      Company Address

                    </label>

                    <textarea
                      rows="4"
                      placeholder="Business address..."
                      className="mt-3 w-full bg-black/20 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none resize-none focus:border-yellow-500/30 transition-all duration-300"
                    ></textarea>

                  </div>

                </div>

              </div>

            </div>

            {/* ERP Status */}
            <div className="space-y-6">

              {/* System Status */}
              <div className="relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[34px] p-7">

                <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-emerald-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">

                    <MonitorCog
                      size={28}
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white mt-6">

                    ERP Systems

                  </h3>

                  {/* Status List */}
                  <div className="space-y-4 mt-6">

                    <div className="flex items-center justify-between">

                      <span className="text-zinc-400">

                        Database

                      </span>

                      <span className="text-emerald-400">

                        Active

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-zinc-400">

                        Ledger System

                      </span>

                      <span className="text-emerald-400">

                        Synced

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-zinc-400">

                        Reports Engine

                      </span>

                      <span className="text-emerald-400">

                        Running

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-zinc-400">

                        Authentication

                      </span>

                      <span className="text-yellow-400">

                        Pending

                      </span>

                    </div>

                  </div>

                </div>

              </div>

              {/* Security Alert */}
              <div className="relative overflow-hidden bg-red-500/[0.04] border border-red-500/20 rounded-[34px] p-7">

                <div className="absolute top-[-100px] right-[-100px] w-[220px] h-[220px] bg-red-500/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-3xl bg-red-500/10 text-red-400 flex items-center justify-center">

                    <LockKeyhole
                      size={28}
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-white mt-6">

                    Security Alert

                  </h3>

                  <p className="text-zinc-400 mt-4 leading-relaxed">

                    Configure JWT authentication and database security
                    during backend implementation phase.

                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* Settings Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            {settingsCards.map(
              (
                item,
                index
              ) => {

                const Icon =
                  item.icon;

                return (

                  <div
                    key={index}
                    className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[32px] p-7 hover:border-yellow-500/20 hover:-translate-y-1 transition-all duration-300"
                  >

                    {/* Glow */}
                    <div
                      className={`absolute top-[-80px] right-[-80px] w-[180px] h-[180px] bg-gradient-to-br ${item.color} opacity-10 blur-[100px] rounded-full`}
                    ></div>

                    <div className="relative z-10">

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.12)]`}
                      >

                        <Icon
                          size={28}
                          className="text-black"
                        />

                      </div>

                      {/* Content */}
                      <div className="mt-7">

                        <h3 className="text-2xl font-bold text-white leading-tight">

                          {item.title}

                        </h3>

                        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">

                          {
                            item.description
                          }

                        </p>

                        <button className="mt-6 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-yellow-500/20 hover:bg-yellow-500/10 transition-all duration-300 text-white text-sm">

                          Configure

                        </button>

                      </div>

                    </div>

                  </div>
                );
              }
            )}

          </section>

        </div>

      </PageTransition>

    </MainLayout>
  );
}

export default Settings;