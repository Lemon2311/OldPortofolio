"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppendixComponent = void 0;
var core_1 = require("@angular/core");
var AppendixComponent = /** @class */ (function () {
    function AppendixComponent() {
    }
    AppendixComponent.prototype.ngOnInit = function () {
        // Get the modal
        var modal = document.getElementById('myModal');
        // Get the image and insert it inside the modal - use its "alt" text as a caption
        /*var img = document.getElementById('myImg') as HTMLImageElement;*/
        var modalImg = document.getElementById('img01');
        var captionText = document.getElementById('caption');
        var img = document.querySelectorAll('.thumbnail');
        for (var i = 0; i < img.length; i++) {
            if (img[i])
                img[i].onclick = function () {
                    if (modal)
                        modal.style.display = 'block';
                    if (modalImg) {
                        modalImg.src = this.src;
                        modalImg.alt = this.alt;
                        if (captionText)
                            captionText.innerHTML = this.alt;
                    }
                };
        }
        var img01 = document.getElementById('img01');
        // When the user clicks on <span> (x), close the modal
        if (modal)
            modal.onclick = function () {
                if (img01)
                    img01.className += ' out';
                setTimeout(function () {
                    if (modal)
                        modal.style.display = 'none';
                    if (img01)
                        img01.className = 'modal-content';
                }, 400);
            };
    };
    AppendixComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-appendix',
            template: "\n    <section>\n      <div class=\"columns has-background-grey-darker py-6\">\n        <div class=\"column pl-6\"></div>\n        <div class=\"column px-6 py-6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p class=\"title has-text-danger-dark line\">CSWA</p>\n              <img\n                class=\"thumbnail\"\n                id=\"myImg\"\n                src=\"./assets/sldr.PNG\"\n                alt=\"Certified SOLIDWORKS Associate in Mechanical Design\"\n                height=\"300\"\n                width=\"315\"\n              />\n              <div id=\"myModal\" class=\"modal\">\n                <img class=\"modal-content\" id=\"img01\" />\n                <div id=\"caption\"></div>\n              </div>\n              <p class=\"subtitle\"></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"column px-6 py-6\">\n        <div class=\"card\">\n            <div class=\"card-content\">\n              <p class=\"title has-text-danger-dark line\">Java</p>\n              <img\n                class=\"thumbnail\"\n                id=\"myImg\"\n                src=\"./assets/22.PNG\"\n                alt=\"Java from Scratch\"\n                height=\"300\"\n                width=\"315\"\n              />\n              <div id=\"myModal\" class=\"modal\">\n                <img class=\"modal-content\" id=\"img03\" />\n                <div id=\"caption\"></div>\n              </div>\n              <p class=\"subtitle\"></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"column px-6 pt-6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p class=\"title has-text-danger-dark line\">ECDL</p>\n              <img\n                class=\"thumbnail\"\n                id=\"myImg\"\n                src=\"./assets/23.PNG\"\n                alt=\"ECDL\"\n                height=\"300\"\n                width=\"315\"\n              />\n              <div id=\"myModal\" class=\"modal\">\n                <img class=\"modal-content\" id=\"img02\" />\n                <div id=\"caption\"></div>\n              </div>\n              <p class=\"subtitle\"></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"column\"></div>\n      </div>\n    </section>\n\n    <section>\n      <div class=\"columns has-background-grey-darker py-6\">\n        <div class=\"column pl-6\"></div>\n        <div class=\"column px-6 py-6\">\n          <div class=\"card\">\n            <div class=\"card-content\">\n              <p class=\"title has-text-danger-dark line\">BAC</p>\n              <img\n                class=\"thumbnail\"\n                id=\"myImg\"\n                src=\"./assets/2.png\"\n                alt=\"BACALAUREAT\"\n                height=\"300\"\n                width=\"315\"\n              />\n              <div id=\"myModal\" class=\"modal\">\n                <img class=\"modal-content\" id=\"img01\" />\n                <div id=\"caption\"></div>\n              </div>\n              <p class=\"subtitle\"></p>\n            </div>\n          </div>\n        </div>\n        <div class=\"column px-6 py-6\"></div>\n        <div class=\"column px-6 pt-6\"></div>\n        <div class=\"column\"></div>\n      </div>\n    </section>\n  ",
            styles: [
                "\n      .line {\n        width: 100px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .center {\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        width: 50%;\n      }\n\n      #myImg {\n        border-radius: 5px;\n        cursor: pointer;\n        transition: 0.3s;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n\n      #myImg:hover {\n        opacity: 0.7;\n      }\n\n      #myPhoto {\n        border-radius: 5px;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n\n      .modal {\n        display: none; /* Hidden by default */\n        position: fixed; /* Stay in place */\n        z-index: 99; /* Sit on top */\n        padding-top: 100px; /* Location of the box */\n        left: 0;\n        top: 0;\n        width: 100%; /* Full width */\n        height: 100%; /* Full height */\n        overflow: auto; /* Enable scroll if needed */\n        background-color: rgb(0, 0, 0); /* Fallback color */\n        background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */\n      }\n\n      .modal-content {\n        margin: auto;\n        display: block;\n        width: 35%;\n        //max-width: 75%;\n      }\n\n      #caption {\n        margin: auto;\n        display: block;\n        width: 80%;\n        max-width: 700px;\n        text-align: center;\n        color: #ccc;\n        padding: 10px 0;\n        height: 150px;\n      }\n\n      @-webkit-keyframes zoom {\n        from {\n          -webkit-transform: scale(1);\n        }\n        to {\n          -webkit-transform: scale(2);\n        }\n      }\n\n      @keyframes zoom {\n        from {\n          transform: scale(0.4);\n        }\n        to {\n          transform: scale(1);\n        }\n      }\n\n      @-webkit-keyframes zoom-out {\n        from {\n          transform: scale(1);\n        }\n        to {\n          transform: scale(0);\n        }\n      }\n      @keyframes zoom-out {\n        from {\n          transform: scale(1);\n        }\n        to {\n          transform: scale(0);\n        }\n      }\n\n      .modal-content,\n      #caption {\n        -webkit-animation-name: zoom;\n        -webkit-animation-duration: 0.6s;\n        animation-name: zoom;\n        animation-duration: 0.6s;\n      }\n\n      .out {\n        animation-name: zoom-out;\n        animation-duration: 0.6s;\n      }\n\n      @media only screen and (max-width: 700px) {\n        .modal-content {\n          width: 100%;\n        }\n      }\n    ",
            ]
        })
    ], AppendixComponent);
    return AppendixComponent;
}());
exports.AppendixComponent = AppendixComponent;
