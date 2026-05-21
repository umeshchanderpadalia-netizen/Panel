import {
  useEffect,
} from "react";

import {
  getVendors,
} from "../api/vendorApi";

import useAsync from "./useAsync";

function useVendors() {

  const {
    data,
    setData,
    loading,
    error,
    execute,
  } = useAsync(
    getVendors,
    false
  );

  // Fetch Vendors
  const fetchVendors =
    async () => {

      const response =
        await execute();

      if (!response)
        return;

      const formattedVendors =
        response.map(
          (vendor) => ({

            id:
              vendor.id,

            company:
              vendor.company ||
              "",

            owner:
              vendor.owner ||
              "",

            phone:
              vendor.phone ||
              "",

            email:
              vendor.email ||
              "",

            location:
              vendor.location ||
              "",

            totalDrivers:
              vendor.totalDrivers ||
              0,

            activeDrivers:
              vendor.activeDrivers ||
              0,

            assignedTrips:
              vendor.assignedTrips ||
              0,

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
              vendor.gstNumber ||
              "",

            avatar:
              vendor.avatar ||
              "",

            color:
              vendor.color ||
              "text-emerald-400 bg-emerald-500/20",
          })
        );

      setData(
        formattedVendors
      );
    };

  useEffect(() => {

    fetchVendors();

  }, []);

  return {

    vendors:
      data || [],

    setVendors:
      setData,

    loading,

    error,

    retry:
      fetchVendors,
  };
}

export default useVendors;