## route-free-finder-3.0

### Step 1: UI foundation (React SPA + Vitest + Tailwind CSS) :construction: 

**Requirements:**
- The app renders two pages: Main (route finder) and Add (photo upload).
- Navigation between the pages works.
- All tests pass.

### Step 2: Map and route inputs

**Requirements:**
- The Main page (`/`) displays a HERE map centered on Lisbon and restricted to Lisbon bounds.
- The user can set point A and point B by typing an address (autosuggest limited to Lisbon) or by clicking on the map.
- Points outside Lisbon are rejected with a clear error message.
- Routes longer than the maximum pedestrian distance are rejected with a clear error message.
- Validation functions are covered by unit tests.

### Step 3: Pedestrian routing

**Requirements:**
- The app requests a route from the HERE Routing API v8 with `transportMode=pedestrian` and decodes the returned polyline.
- The route is drawn on the map, and its distance and duration are shown.
- A text list of route steps is available as an alternative to the map.
- Loading, empty and error states are handled.
- A valid A - B pair displays a walking route.
- A failed request shows an error message with a retry option.
- Validation functions are covered by unit tests.
