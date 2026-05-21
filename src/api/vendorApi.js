import vendorsData from "../data/vendors";

const delay = (ms) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

const getStatusColor = (
  status
) => {
  switch (status) {
    case "Active":
      return "text-emerald-400 bg-emerald-500/20";

    case "Busy":
      return "text-yellow-400 bg-yellow-500/20";

    case "Inactive":
      return "text-zinc-400 bg-zinc-500/20";

    case "Blacklisted":
      return "text-red-400 bg-red-500/20";

    default:
      return "text-cyan-400 bg-cyan-500/20";
  }
};

const formatVendor = (
  vendor
) => ({
  id:
    vendor.id ||
    Date.now(),

  company:
    vendor.company || "",

  owner:
    vendor.owner || "",

  phone:
    vendor.phone || "",

  email:
    vendor.email || "",

  location:
    vendor.location || "",

  totalDrivers:
    vendor.totalDrivers || 0,

  activeDrivers:
    vendor.activeDrivers || 0,

  assignedTrips:
    vendor.assignedTrips || 0,

  completedTrips:
    vendor.completedTrips ||
    0,

  cancelledTrips:
    vendor.cancelledTrips ||
    0,

  monthlyRevenue:
    vendor.monthlyRevenue ||
    "₹0",

  pendingPayments:
    vendor.pendingPayments ||
    "₹0",

  paymentStatus:
    vendor.paymentStatus ||
    "Pending",

  status:
    vendor.status ||
    "Inactive",

  partnershipDate:
    vendor.partnershipDate ||
    "",

  gstNumber:
    vendor.gstNumber || "",

  avatar:
    vendor.avatar || "",

  color:
    vendor.color ||
    getStatusColor(
      vendor.status
    ),

  createdAt:
    vendor.createdAt ||
    new Date().toISOString(),
});

/* =========================
   Get Vendors
========================= */

export async function getVendors() {
  await delay(900);

  return vendorsData.map(
    formatVendor
  );
}

/* =========================
   Create Vendor
========================= */

export async function createVendor(
  vendor
) {
  await delay(700);

  return {
    success: true,
    message:
      "Vendor created successfully.",
    data: formatVendor({
      ...vendor,
      id: Date.now(),
    }),
  };
}

/* =========================
   Update Vendor
========================= */

export async function updateVendor(
  updatedVendor
) {
  await delay(600);

  return {
    success: true,
    message:
      "Vendor updated successfully.",
    data:
      formatVendor(
        updatedVendor
      ),
  };
}

/* =========================
   Delete Vendor
========================= */

export async function deleteVendor(
  vendorId
) {
  await delay(500);

  return {
    success: true,
    message:
      "Vendor deleted successfully.",
    deletedId: vendorId,
  };
}