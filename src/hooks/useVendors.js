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

  // FETCH VENDORS
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
              vendor._id,

            vendorId:
              vendor.vendorId || "",

            company:
              vendor.companyName ||
              "",

            owner:
              vendor.vendorName ||
              "",

            phone:
              vendor.phone ||
              "",

            email:
              vendor.email ||
              "",

            location:
              `${vendor.city || ""} ${vendor.state || ""}`,

            totalDrivers:
              vendor.totalDrivers ||
              0,

            activeDrivers:
              vendor.activeDrivers ||
              0,

            assignedTrips:
              vendor.totalTrips ||
              0,

            completedTrips:
              vendor.completedTrips ||
              0,

            cancelledTrips:
              vendor.cancelledTrips ||
              0,

            monthlyRevenue:
              vendor.totalEarnings ||
              0,

            pendingPayments:
              vendor.pendingAmount ||
              0,

            paymentStatus:
              vendor.paymentStatus ||
              "Pending",

            status:
              vendor.status ||
              "Inactive",

            partnershipDate:
              vendor.createdAt ||
              "",

            gstNumber:
              vendor.gstNumber ||
              "",

            comments:
              vendor.comments ||
              "",

            color:
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