import{_ as r,J as n,o as i,c as d}from"./index-2fc2d7ed.js";const c={data(){return{itemCode:"",userName:"",headerText:"",name:"",count:3,generatedBarcodes:[],barcodeOptions:{format:"CODE128",displayValue:!0,fontSize:25,lineColor:"#000000",width:2,height:100},showAlert:!1,alertMessage:""}},mounted(){console.log(this.$route.params),this.itemCode=this.$route.params.itemnumber,this.headerText=this.$route.params.laoname,this.generateBarcodes(),this.printBarcodes()},methods:{generateBarcodes(){this.generatedBarcodes=[];for(let e=0;e<this.count;e++)this.generatedBarcodes.push(this.itemCode)},printBarcodes(){const e=window.open("","_blank");e.document.write(`
            <html>
              <head>
                <title>Generated Barcodes</title>
                <style>
                  @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Lobster&family=Noto+Sans+Lao&family=Noto+Serif+Lao:wght@900&family=Oswald:wght@700&family=Tapestry&display=swap');
                  @page {
                    size: 3.2cm 2cm; /* Set the size of the printed page */
                    margin: 0;
                  }
                  .barcode-container {
                    display: flex;
                    justify-content: center;
                    // align-items: center;
                    height: 100%;
                    width: 100%;
                  }
                  .barcode-svg {
                    /* Adjusted to 2 cm height and 3 cm width */
                    height: 1.6cm;
                    width: 3.4cm;
                    font-size: 12px;
                    margin-top: -2px;
                  }
                  .barcode-text {
                    font-size: 30px; /* Adjust the font size as needed */
                    font-family: Arial, sans-serif; /* Use a commonly available font */
                    margin-top: 5px; /* Add a small margin between barcode and text */
                    text-align: center;
                  }
                  .container{
                    display: flex;
                    justify-content: justify-content-center;
                    width: 100%;
                    margin-left: auto;
                    margin-left: auto;
                  }
                  .barcode-header{
                    width: 120px;
                    font-size: 8px;
                    text-align: center;
                    margin-top: -10px;
                    font-family: 'Noto Sans Lao', sans-serif;
                }
                .barcode-row {
                  display: flex;
                  justify-content: space-between;
              }
                </style>
              </head>
              <body>
                <div class="barcode-row">
                  ${this.generatedBarcodes.map(t=>this.generateBarcodeHtml(t)).join("")}  
                </div>
              </body>
            </html>
          `),e.document.close(),this.$nextTick(()=>{const t=e.document.getElementsByClassName("barcode-svg");Array.from(t).forEach((a,s)=>{n(a,this.generatedBarcodes[s],this.barcodeOptions)}),e.print(),e.close(),window.location.href="/product"})},truncateText(e,t){return e.length>t?e.substring(0,t-3)+"...":e},generateBarcodeHtml(e){const t="1.6cm",a="3.4cm",s=this.headerText;return`
          <div class="barcode-container">
            <div>
              <div class="barcode-header">${this.truncateText(s,30)}</div>
                <svg class="barcode-svg" height="${t}" width="${a}"></svg>  
            </div>
          </div>
          `}}},l={class:"container"};function h(e,t,a,s,o,m){return i(),d("div",l)}const g=r(c,[["render",h]]);export{g as default};
