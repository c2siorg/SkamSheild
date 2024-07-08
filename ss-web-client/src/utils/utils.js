export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function validate(formObject, schema) {
  console.log("----------validate------------");
  console.log(formObject, schema);
  const valid = schema.validate(formObject);
  console.log(valid);
  const newErrorObject = {};
  if (valid.error) {
    valid.error.details.forEach((err) => {
      newErrorObject[err.path.join(".")] = err.message;
    });
  }
  console.log(newErrorObject);
  console.log("----------end validate------------");
  return newErrorObject;
}

export const browserDetect = () => {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) !== -1
  ) {
    console.log("Opera");
    // alert('Opera')
    return true;
  } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
    console.log("Chrome");
    // alert('Chrome')
    return true;
  } else if (navigator.userAgent.indexOf("Safari") !== -1) {
    console.log("Safari");
    // alert('Safari');
    return true;
  } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
    console.log("Firefox");
    // alert('Firefox');
    return true;
  } else if (
    navigator.userAgent.indexOf("MSIE") !== -1 ||
    !!document.documentMode === true
  ) {
    //IF IE > 10
    console.log("IE");
    // alert('IE');
    return true;
  } else {
    console.log("unknown");
    return false;
  }
};

export const printDocument = (documentId, filename, position) => {
  // const input = document.getElementById(documentId);
  // html2canvas(input)
  //   .then((canvas) => {
  //     const image = canvas.toDataURL('image/jpeg', 1.0);
  //     const doc = new jsPDF('p', 'px', 'a4');
  //     if (position === 'start') {
  //       doc.addImage(image, 'JPEG', 1, 1);
  //     }
  //     else {
  //       const pageWidth = doc.internal.pageSize.getWidth();
  //       const pageHeight = doc.internal.pageSize.getHeight();
  //       const widthRatio = pageWidth / canvas.width;
  //       const heightRatio = pageHeight / canvas.height;
  //       const ratio = widthRatio > heightRatio ? heightRatio : widthRatio;
  //       const canvasWidth = canvas.width * ratio;
  //       const canvasHeight = canvas.height * ratio;
  //       const marginX = (pageWidth - canvasWidth) / 2;
  //       const marginY = (pageHeight - canvasHeight) / 2;
  //       doc.addImage(image, 'JPEG', marginX, marginY, canvasWidth, canvasHeight);
  //       // doc.output('dataurlnewwindow');
  //     }
  //     doc.save(`${filename}.pdf`);
  //   })
  //   ;
};

export const downloadCsv = (filename, csvContent) => {
  // var encodedUri = encodeURI(csvContent);
  // var link = document.createElement("a");
  // link.setAttribute("href", encodedUri);
  // link.setAttribute("download", `${filename}.csv`);
  // document.body.appendChild(link); // Required for FF
  // link.click();
};

export const uuidv4 = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
