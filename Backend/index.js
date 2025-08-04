const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors()); // Allow CORS from everyone

app.get("/swiggy", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0225&lng=72.5714&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Accept": "application/json",
          "Accept-Language": "en-US,en;q=0.9",
          "Referer": "https://www.swiggy.com/",
          "Origin": "https://www.swiggy.com",
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Swiggy API Error:", error.response?.status, error.message);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});
// app.get("/restorant", async (req, res) => {

//   let {restroId} = req.params;
//   try {
//     const response = await axios.get(
//       `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.46670&lng=70.06440&restaurantId=${restroId}`,
//       {
//         headers: {
//           "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
//           "Accept": "application/json",
//           "Accept-Language": "en-US,en;q=0.9",
//           "Referer": "https://www.swiggy.com/",
//           "Origin": "https://www.swiggy.com",
//         },
//       }
//     );

//     res.json(response.data);
//     console.log(response.data);
//   } catch (error) {
//     console.error("Swiggy API Error:", error.response?.status, error.message);
//     res.status(500).json({ error: "Failed to fetch Swiggy data" });
//   }
// });

app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
