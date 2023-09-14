import React from 'react'
import Timer from './Timer'


export default function Footer() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <button type="button" class="btn btn-dark small">Refresh</button>
              </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <button type="button" class="btn btn-dark small">Hint</button>
              </li>
            </ul>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Timer/>
              </li>
            </ul>
        
        </div>
      </nav>
    </div>
  )
}
