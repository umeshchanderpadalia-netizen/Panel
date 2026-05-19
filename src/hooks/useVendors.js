import {
  useEffect,
  useState,
} from "react";

import {
  getVendors,
} from "../api/vendorApi";

function useVendors() {

  const [vendors, setVendors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  // Fetch Vendors
  const fetchVendors =
    async () => {

      try {

        setLoading(true);

        setError("");

        const data =
          await getVendors();

        // Future Backend Validation
        const formattedVendors =
          data.map((vendor) => ({

            id: vendor.id,

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
              vendor.avatar || "",

            color:
              vendor.color ||
              "text-emerald-400 bg-emerald-500/20",
          }));

        setVendors(
          formattedVendors
        );

      } catch {

        setError(
          "Unable to load vendor operations."
        );

      } finally {

        // Smooth Loading Effect
        setTimeout(() => {

          setLoading(false);

        }, 400);
      }
    };

  useEffect(() => {

    fetchVendors();

  }, []);

  return {
    vendors,
    setVendors,
    loading,
    error,
    retry:
      fetchVendors,
  };
}

export default useVendors;