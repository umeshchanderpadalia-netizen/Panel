export const fetchDashboardStats =
  () => {

    return new Promise(
      (resolve) => {

        setTimeout(() => {

          resolve([
            {
              title:
                "Total Revenue",

              value: "₹4.8L",

              growth:
                "+12% this month",

              status:
                "positive",
            },

            {
              title:
                "Active Drivers",

              value: "324",

              growth:
                "+8 new today",

              status:
                "positive",
            },

            {
              title:
                "Total Bookings",

              value: "12,540",

              growth:
                "+18% growth",

              status:
                "positive",
            },

            {
              title:
                "Ride Efficiency",

              value: "92%",

              growth:
                "+5% operational improvement",

              status:
                "positive",
            },
          ]);

        }, 1200);
      }
    );
  };