const state = {
  features: [
    {
      feature: "CORE",
      displayName: "Core"
    },
    {
      feature: "TRANSPORT_OPTIONS",
      displayName: "Transport Options"
    },
    {
      feature: "TEMP_SEARCH_CANCEL",
      displayName: "Temporary Search Cancel"
    },
    {
      feature: "SERVICE_OLD_TOYOTAS",
      displayName: "Service Old Toyotas"
    },
    {
      feature: "CANCEL_BOOKING",
      displayName: "Cancel Booking",
    },
    {
      feature: "SEARCH_BOOKING",
      displayName: "Search Booking"
    },
	  {
		  feature: "MODIFY_BOOKING",
		  displayName: "Modify Booking"
    },
    {
      feature: "VALUE_ADDS",
      displayName: "Value Adds"
    }
  ]
};

var columnDefs = [];
const features = state.features.map((feature, i) =>
  columnDefs.push({
    headerName: feature.displayName,
    field: feature.feature
  })
);

console.log(columnDefs)
