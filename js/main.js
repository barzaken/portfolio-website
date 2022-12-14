

function initPage() {
    renderPortfolio()
    renderProjModals()
}


function onFormSubmit(ev){
    ev.preventDefault()
    var $elUserEmail =$('#formEmail').val()
    var $eSubject =$('#formSubject').val()
    var $elMsg =$('#formMsg').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=bar.zaken@boyar.org.il&su=${$eSubject}&body=${$elMsg} + sent from ${$elUserEmail}`)
}


function renderPortfolio() {
    const projs = getProjs()
    var strHtml = projs.map(proj =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>`
    )
    $('.portfolio-row').html(strHtml)
}

function renderProjModals() {
    const projs = getProjs()
    var strHtml = projs.map(proj =>
        `<div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.png" alt="">
                    <p>${proj.desc}</p>
                    <button class="btn btn-success" type="button" onclick="window.open('${proj.url}')" >
                      Watch Project</button> 
                      <br><br>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`

    )
    $('body').append(strHtml)

}