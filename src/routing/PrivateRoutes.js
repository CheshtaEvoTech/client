import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import BookListing from "../Book/Pages/BookListing";
import BookDetail from "../Book/Pages/BookDetail";

export default function PrivateRoutes() {
  return (
    <div>
      <Routes>
        <Route>
          {/* <Route path="marketing/marketing1" element={<DashboardWrapper />} /> */}
          <Route path="Booklisting" element={<BookListing />} />
          <Route path="BookDetail" element={<BookDetail />} />
        </Route>
      </Routes>
    </div>
  );
}
