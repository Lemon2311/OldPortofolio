import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appendix',
  template: `
    <section>
      <div class="columns has-background-grey-darker py-6">
        <div class="column pl-6"></div>
        <div class="column px-6 py-6">
          <div class="card">
            <div class="card-content">
              <p class="title has-text-danger-dark line">CSWA</p>
              <img
                class="thumbnail"
                id="myImg"
                src="./assets/sldr.PNG"
                alt="Certified SOLIDWORKS Associate in Mechanical Design"
                height="300"
                width="315"
              />
              <div id="myModal" class="modal">
                <img class="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
              <p class="subtitle"></p>
            </div>
          </div>
        </div>
        <div class="column px-6 py-6">
        <div class="card">
            <div class="card-content">
              <p class="title has-text-danger-dark line">Java</p>
              <img
                class="thumbnail"
                id="myImg"
                src="./assets/22.PNG"
                alt="Java from Scratch"
                height="300"
                width="315"
              />
              <div id="myModal" class="modal">
                <img class="modal-content" id="img03" />
                <div id="caption"></div>
              </div>
              <p class="subtitle"></p>
            </div>
          </div>
        </div>
        <div class="column px-6 pt-6">
          <div class="card">
            <div class="card-content">
              <p class="title has-text-danger-dark line">ECDL</p>
              <img
                class="thumbnail"
                id="myImg"
                src="./assets/23.PNG"
                alt="ECDL"
                height="300"
                width="315"
              />
              <div id="myModal" class="modal">
                <img class="modal-content" id="img02" />
                <div id="caption"></div>
              </div>
              <p class="subtitle"></p>
            </div>
          </div>
        </div>
        <div class="column"></div>
      </div>
    </section>

    <section>
      <div class="columns has-background-grey-darker py-6">
        <div class="column pl-6"></div>
        <div class="column px-6 py-6">
          <div class="card">
            <div class="card-content">
              <p class="title has-text-danger-dark line">BAC</p>
              <img
                class="thumbnail"
                id="myImg"
                src="./assets/2.png"
                alt="BACALAUREAT"
                height="300"
                width="315"
              />
              <div id="myModal" class="modal">
                <img class="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
              <p class="subtitle"></p>
            </div>
          </div>
        </div>
        <div class="column px-6 py-6"></div>
        <div class="column px-6 pt-6"></div>
        <div class="column"></div>
      </div>
    </section>
  `,
  styles: [
    `
      .line {
        width: 100px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }

      #myImg {
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      #myImg:hover {
        opacity: 0.7;
      }

      #myPhoto {
        border-radius: 5px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 99; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
      }

      .modal-content {
        margin: auto;
        display: block;
        width: 35%;
        //max-width: 75%;
      }

      #caption {
        margin: auto;
        display: block;
        width: 80%;
        max-width: 700px;
        text-align: center;
        color: #ccc;
        padding: 10px 0;
        height: 150px;
      }

      @-webkit-keyframes zoom {
        from {
          -webkit-transform: scale(1);
        }
        to {
          -webkit-transform: scale(2);
        }
      }

      @keyframes zoom {
        from {
          transform: scale(0.4);
        }
        to {
          transform: scale(1);
        }
      }

      @-webkit-keyframes zoom-out {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0);
        }
      }
      @keyframes zoom-out {
        from {
          transform: scale(1);
        }
        to {
          transform: scale(0);
        }
      }

      .modal-content,
      #caption {
        -webkit-animation-name: zoom;
        -webkit-animation-duration: 0.6s;
        animation-name: zoom;
        animation-duration: 0.6s;
      }

      .out {
        animation-name: zoom-out;
        animation-duration: 0.6s;
      }

      @media only screen and (max-width: 700px) {
        .modal-content {
          width: 100%;
        }
      }
    `,
  ],
})
export class AppendixComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    /*var img = document.getElementById('myImg') as HTMLImageElement;*/
    var modalImg = document.getElementById('img01') as HTMLImageElement;
    var captionText = document.getElementById('caption');

    var img = document.querySelectorAll('.thumbnail');

    for (var i = 0; i < img.length; i++) {
      if (img[i])
        (img[i] as HTMLInputElement).onclick = function () {
          if (modal) modal.style.display = 'block';

          if (modalImg) {
            modalImg.src = (this as HTMLImageElement).src;
            modalImg.alt = (this as HTMLImageElement).alt;
            if (captionText)
              captionText.innerHTML = (this as HTMLImageElement).alt;
          }
        };
    }

    var img01 = document.getElementById('img01');

    // When the user clicks on <span> (x), close the modal
    if (modal)
      modal.onclick = function () {
        if (img01) img01.className += ' out';
        setTimeout(function () {
          if (modal) modal.style.display = 'none';
          if (img01) img01.className = 'modal-content';
        }, 400);
      };
  }
}
