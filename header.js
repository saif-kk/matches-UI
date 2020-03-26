$(document).ready(function () {

  $(`.mainBody`).prepend(`<header id="topnav" class="text-center">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">Cricket Matches</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon">☰</span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link mt-h" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link mt-h" href="./matches.html">Match Schedule</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link mt-h" href="./scores.html">Scores</a>
              </li>
              
            </ul>

          </div>
        </nav>
        </header>`);


 

})
