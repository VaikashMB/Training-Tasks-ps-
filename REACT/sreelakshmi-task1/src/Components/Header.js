import React from 'react'
const Header = () => {
  return (
    
    <div>
     <div>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">PetPlace</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/">Breeds</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/">Pet Health</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/">Pet Insurance</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        <h1 className='head'>PETPLACE</h1>
    </div>
    </div>
  );
};

export default Header