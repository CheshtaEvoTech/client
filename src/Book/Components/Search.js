import React from "react";

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="d-flex align-items-center position-relative me-5">
      {/* <KTIcon iconName="magnifier" className="fs-1 position-absolute ms-6" /> */}
      <i
        class="bi bi-search-heart-fill"
        className="fs-1 position-absolute ms-6 "
      ></i>
      <input
        type="text"
        data-kt-user-table-filter="search"
        className="form-control form-control-solid w-250px ps-14"
        placeholder="Search user"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
