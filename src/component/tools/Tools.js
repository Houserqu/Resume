import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Tools extends Component {
  state = {  }

  printPDF = () => {
    html2canvas(document.getElementById("root")).then((canvas) => {
      //document.body.appendChild(canvas)
    //通过html2canvas将html渲染成canvas，然后获取图片数据
          var imgData = canvas.toDataURL('image/jpeg');
          //console.log(imgData);
    //初始化pdf，设置相应格式
          var doc = new jsPDF("p", "mm", "a4");
             
          //这里设置的是a4纸张尺寸
          doc.addImage(imgData, 'JPEG', 0, 0,210,297);
    
    //输出保存命名为content的pdf
          doc.save('瞿浩-前端实习生.pdf');

    });
  }

  render() {
    return (
      <div className="tools">
        <button onClick={this.printPDF}>保存到本地</button>
      </div>
    );
  }
}

export default Tools;