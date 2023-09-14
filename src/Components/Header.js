import React from "react";

export default function Header(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <div>{props.title}</div>
                </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div>Next Word: {"AND"}</div>
              </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <div>Score: {0}</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
