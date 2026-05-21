export const fetchDashboardStats =
  async () => {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        setTimeout(() => {

          try {

            resolve([
              {
                id: 1,

                title:
                  "Total Revenue",

                value:
                  "₹4.8L",

                trend:
                  "+12% this month",

                category:
                  "revenue",

                status:
                  "positive",
              },

              {
                id: 2,

                title:
                  "Active Drivers",

                value:
                  "324",

                trend:
                  "+8 active today",

                category:
                  "drivers",

                status:
                  "positive",
              },

              {
                id: 3,

                title:
                  "Total Bookings",

                value:
                  "12,540",

                trend:
                  "+18% booking growth",

                category:
                  "bookings",

                status:
                  "positive",
              },

              {
                id: 4,

                title:
                  "Ride Efficiency",

                value:
                  "92%",

                trend:
                  "+5% operational improvement",

                category:
                  "operations",

                status:
                  "positive",
              },
            ]);

          } catch (error) {

            reject({
              success: false,
              message:
                "Failed to fetch dashboard stats",
            });
          }

        }, 1200);
      }
    );
  };