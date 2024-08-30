
// 使用jQuery
$(function () {

    // 按下任意styleItem或shape previw區域，Design steip會隱藏
    $('.styleItem li').click(function () {
        $('#showStep').hide();
        $('.KeyArea').show(500);
    });

    $('#shapeArea a').click(function () {
        $('#showStep').hide();
        $('.KeyArea').show(500);
    });



    // 按下#lblForTextFonts的.arrow 
    // 1.新增.arrow的.beClick類別
    // 2.新增#chooseTextFonts的.show類別
    $('#lblForTextFonts').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#chooseTextFonts').toggleClass('show');
    });

    // 按下#lblForTextColor的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#chooseTextColor的.show類別
    $('#lblForTextColor').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('.chooseColor').toggleClass('show');
    });

    // 按下#lblForTextSize的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#chooseTextSize的.show類別
    $('#lblForTextSize').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('.textsizeRange').toggleClass('show');
    });

    // 按下#frontSide
    // 1. #backColorSpace加入.hiden類別
    // 2. #frontSideSpace加入.show類別
    $('#frontSide').click(function () {
        $('#backColorSpace').hide();
        $('#frontColorSpace').show();
    });

    // 按下#backSide
    // 1. #frontColorSpace加入.hiden類別
    // 2. #backSideSpace加入.show類別
    $('#backSide').click(function () {
        $('#frontColorSpace').hide();
        $('#backColorSpace').show();
    });

    // 按下#lblForFront-1的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#frontColor-1.chooseColor的.show類別
    $('#lblForFront-1').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#frontColor-1.chooseColor').toggleClass('show');
    });

    // 按下#lblForFront-2的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#frontColor-2.chooseColor的.show類別
    $('#lblForFront-2').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#frontColor-2.chooseColor').toggleClass('show');
    });

    // 按下#lblForFront-3的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#frontColor-3.chooseColor的.show類別
    $('#lblForFront-3').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#frontColor-3.chooseColor').toggleClass('show');
    });

    // 按下#lblForFront-4的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#frontColor-4.chooseColor的.show類別
    $('#lblForFront-4').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#frontColor-4.chooseColor').toggleClass('show');
    });

    // 按下#lblForFront-5的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#frontColor-5.chooseColor的.show類別
    $('#lblForFront-5').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#frontColor-5.chooseColor').toggleClass('show');
    });


    // 按下#lblForBack-1的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#backColor-1.chooseColor的.show類別
    $('#lblForBack-1').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#backColor-1.chooseColor').toggleClass('show');
    });

    // 按下#lblForBack-2的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#backColor-2.chooseColor的.show類別
    $('#lblForBack-2').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#backColor-2.chooseColor').toggleClass('show');
    });

    // 按下#lblForBack-3的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#backColor-3.chooseColor的.show類別
    $('#lblForBack-3').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#backColor-3.chooseColor').toggleClass('show');
    });

    // 按下#lblForBack-4的.arrow
    // 1. 新增.arrow的.beClick類別
    // 2. 新增#backColor-4.chooseColor的.show類別
    $('#lblForBack-4').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
        $('#backColor-4.chooseColor').toggleClass('show');
    });

    // 按下shape區的衣服變更preview
    $('#shapeArea .stylePreview a').click(function () {
        let shapeNo = $(this).find('img').attr('alt');
        $('.preJersey svg').css('display', 'none');
        $(`#${shapeNo}`).css('display', 'block');

        // 當預覽區是shape圖案時只顯示2個color
        let frontColorHide = $('.frontColor').filter((index, element) => {
            return index > 1;
        });
        frontColorHide.each((index, element) => {
            $(element).css('display', 'none');
        });
        // 換色
        $('#frontColor-1 a').click(function () {
            $(`#${shapeNo}`).find('.Fcollar').attr('fill', $(this).css('background-color'));
            FlblColor01 = $(`#${shapeNo}`).find('.Fcollar').attr('fill');
            $('#lblForFront-1 div a').css('background-color', FlblColor01);
        });
        $('#frontColor-2 a').click(function () {
            $(`#${shapeNo}`).find('.FC2').attr('fill', $(this).css('background-color'));
            FlblColor02 = $(`#${shapeNo}`).find('.FC2').attr('fill');
            $('#lblForFront-2 div a').css('background-color', FlblColor02);
        });

    });


    // 按下design區的衣服變更preview
    $('#designArea .stylePreview a').click(function () {
        let designNo = $(this).find('img').attr('alt');
        $('.preJersey figure').css('background-image', 'none');
        $('.preJersey svg').css('display', 'none');
        $(`#${designNo}`).css('display', 'block');
        // 找preview區域的顏色顯示在chooseColor上
        let FlblColor01 = $(`#${designNo}`).find('.Fcollar').attr('fill');
        let FlblColor02 = $(`#${designNo}`).find('.FC2').attr('fill');
        let FlblColor03 = $(`#${designNo}`).find('.FC3').attr('fill');
        let FlblColor04 = $(`#${designNo}`).find('.FC4').attr('fill');
        let FlblColor05 = $(`#${designNo}`).find('.VSERwd').attr('fill');
        $('#lblForFront-1 div a').css('background-color', FlblColor01);
        $('#lblForFront-2 div a').css('background-color', FlblColor02);
        $('#lblForFront-3 div a').css('background-color', FlblColor03);
        $('#lblForFront-4 div a').css('background-color', FlblColor04);
        $('#lblForFront-5 div a').css('background-color', FlblColor05);
        // 8/29 add 把5個frontColor選區都顯示出來
        $('.frontColor').each((index, element) => {
            $(element).css('display', 'block');
        })
        // 換色功能
        $('#frontColor-1 a').click(function () {
            $(`#${designNo}`).find('.Fcollar').attr('fill', $(this).css('background-color'));
            FlblColor01 = $(`#${designNo}`).find('.Fcollar').attr('fill');
            $('#lblForFront-1 div a').css('background-color', FlblColor01);
        });
        $('#frontColor-2 a').click(function () {
            $(`#${designNo}`).find('.FC2').attr('fill', $(this).css('background-color'));
            FlblColor02 = $(`#${designNo}`).find('.FC2').attr('fill');
            $('#lblForFront-2 div a').css('background-color', FlblColor02);
        });
        $('#frontColor-3 a').click(function () {
            $(`#${designNo}`).find('.FC3').attr('fill', $(this).css('background-color'));
            FlblColor03 = $(`#${designNo}`).find('.FC3').attr('fill');
            $('#lblForFront-3 div a').css('background-color', FlblColor03);
        });
        $('#frontColor-4 a').click(function () {
            $(`#${designNo}`).find('.FC4').attr('fill', $(this).css('background-color'));
            FlblColor04 = $(`#${designNo}`).find('.FC4').attr('fill');
            $('#lblForFront-4 div a').css('background-color', FlblColor04);
        });
        $('#frontColor-5 a').click(function () {
            $(`#${designNo}`).find('.VSERwd').attr('fill', $(this).css('background-color'));
            FlblColor05 = $(`#${designNo}`).find('.VSERwd').attr('fill');
            $('#lblForFront-5 div a').css('background-color', FlblColor05);
        });
    });


    // textPosition 位置點選變更
    // $('#textPosition a').click(function () {
    //     let textPositionNo = $(this).find('img').attr('alt');
    //     // 移除txtPosition開頭的class
    //     $('.showTxtOnJersy').removeClass(function (index, className) {
    //         return (className.match(/(^|\s)txtPosition\S+/g) || []).join(' ');
    //     });
    //     $('.showTxtOnJersy').addClass(textPositionNo);
    // });

    // textFont 字型選擇變更
    $('#chooseTextFonts').change(function () {
        let chossedFont = $(this).find('option:selected').css('font-family');
        $('.showTxtOnJersy').css('font-family', chossedFont);
    });

    // textColor 字體顏色選擇變更
    $('#chooseTextColor a').click(function () {
        $('.showTxtOnJersy').css('color', $(this).css('background-color'))
    });


    // TextArea方向按鈕改變位置
    let ty = 180;
    let tx = 0;
    let TxtintervalId;
    $('#textArea .UpBtn').mousedown(function () {
        TxtintervalId = setInterval(function () {
            ty = ty - 10;
            // 每 100 毫秒更新一次
            $('.showTxtOnJersy').css('top', `${ty}px`);
        }, 100);
    });
    $('#textArea .DownBtn').mousedown(function () {
        TxtintervalId = setInterval(function () {
            ty = ty + 10;
            $('.showTxtOnJersy').css('top', `${ty}px`);
        }, 100);
    });
    $('#textArea .LeftBtn').mousedown(function () {
        TxtintervalId = setInterval(function () {
            tx = tx - 10;
            $('.showTxtOnJersy').css('left', `${tx}px`);
        }, 100);
    });
    $('#textArea .RightBtn').mousedown(function () {
        TxtintervalId = setInterval(function () {
            tx = tx + 10;
            $('.showTxtOnJersy').css('left', `${tx}px`);
        }, 100);
    });
    $(document).mousemove(function () {
        clearInterval(TxtintervalId);
    });
    $(document).mouseup(function () {
        clearInterval(TxtintervalId);
    });

    // NumArea方向按鈕改變位置
    let Ny = 220;
    let Nx = 10;
    let NumintervalId;
    $('#numberArea .UpBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Ny = Ny - 10;
            $('.showNumOnJersy').css('top', `${Ny}px`);
        }, 100);
    });
    $('#numberArea .DownBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Ny = Ny + 10;
            $('.showNumOnJersy').css('top', `${Ny}px`);
        }, 100);
    });
    $('#numberArea .LeftBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Nx = Nx - 10;
            $('.showNumOnJersy').css('left', `${Nx}px`);
        }, 100);
    });
    $('#numberArea .RightBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Nx = Nx + 10;
            $('.showNumOnJersy').css('left', `${Nx}px`);
        }, 100);
    });
    $(document).mousemove(function () {
        clearInterval(NumintervalId);
    });
    $(document).mouseup(function () {
        clearInterval(NumintervalId);
    });

    // NumArea方向按鈕改變位置
    let Py = 100;
    let Px = 340;
    let PictureIntervalId;
    $('#pictureArea .UpBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Py = Py - 10;
            $('.showImgOnJersy').css('top', `${Py}px`);
        }, 100);
    });
    $('#pictureArea .DownBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Py = Py + 10;
            $('.showImgOnJersy').css('top', `${Py}px`);
        }, 100);
    });
    $('#pictureArea .LeftBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Px = Px - 10;
            $('.showImgOnJersy').css('left', `${Px}px`);
        }, 100);
    });
    $('#pictureArea .RightBtn').mousedown(function () {
        NumintervalId = setInterval(function () {
            Px = Px + 10;
            $('.showImgOnJersy').css('left', `${Px}px`);
        }, 100);
    });
    $(document).mousemove(function () {
        clearInterval(NumintervalId);
    });
    $(document).mouseup(function () {
        clearInterval(NumintervalId);
    });
    // 以上方向按鈕事件

    // NumberArea字體樣式設定
    $('#NumStyleValue label').click(function () {
        $(this).find('.arrow').toggleClass('beClick');
    });
    $('#lblForNumFonts').click(function () {
        $('#chooseNumFonts').toggleClass('show');
    });
    $('#lblForNumColor').click(function () {
        $('.chooseColor').toggleClass('show');
    });
    $('#lblForNumSize').click(function () {
        $('.NumsizeRange').toggleClass('show');
    })

    // NumberArea樣式變更
        $('#chooseNumFonts').change(function () {
            let chossedFont = $(this).find('option:selected').css('font-family');
            $('.showNumOnJersy').css('font-family', chossedFont);
        });
    
        $('#chooseNumColor a').click(function () {
            $('.showNumOnJersy').css('color', $(this).css('background-color'))
        });



});



//styleInfo區域動態顯示
let shapeAreaDiv = document.querySelector('#shapeArea');
let designAreaDiv = document.querySelector('#designArea');
let textAreaDiv = document.querySelector('#textArea');
let colorAreaDiv = document.querySelector('#colorArea');
let pictureAreaDiv = document.querySelector('#pictureArea');
let numberAreaDiv = document.querySelector('#numberArea');

function displayNone() {
    shapeAreaDiv = document.querySelector('#shapeArea');
    designAreaDiv = document.querySelector('#designArea');
    textAreaDiv = document.querySelector('#textArea');
    colorAreaDiv = document.querySelector('#colorArea');
    pictureAreaDiv = document.querySelector('#pictureArea');
    numberAreaDiv = document.querySelector('#numberArea');

    shapeAreaDiv.style.display = 'none';
    designAreaDiv.style.display = 'none';
    textAreaDiv.style.display = 'none';
    colorAreaDiv.style.display = 'none';
    pictureAreaDiv.style.display = 'none';
    numberAreaDiv.style.display = 'none';
}

function displayShape() {
    displayNone();
    shapeAreaDiv.style.display = 'flex';
    if (shapeAreaDiv.style.display == 'flex') {
        document.querySelector('#shapeItem').classList.add("focus");
        document.querySelector('#designItem').classList.remove('focus');
        document.querySelector('#textItem').classList.remove('focus');
        document.querySelector('#colorItem').classList.remove('focus');
        document.querySelector('#pictureItem').classList.remove('focus');
        document.querySelector('#numberItem').classList.remove('focus');
    };
}

function displayDesign() {
    displayNone();
    designAreaDiv.style.display = 'flex';
    if (designAreaDiv.style.display == 'flex') {
        document.querySelector('#shapeItem').classList.remove('focus');
        document.querySelector('#designItem').classList.add("focus");
        document.querySelector('#textItem').classList.remove('focus');
        document.querySelector('#colorItem').classList.remove('focus');
        document.querySelector('#pictureItem').classList.remove('focus');
        document.querySelector('#numberItem').classList.remove('focus');
    };
}

function displayText() {
    displayNone();
    textAreaDiv.style.display = 'flex';
    if (textAreaDiv.style.display == 'flex') {
        document.querySelector('#shapeItem').classList.remove('focus');
        document.querySelector('#designItem').classList.remove('focus');
        document.querySelector('#textItem').classList.add("focus");
        document.querySelector('#colorItem').classList.remove('focus');
        document.querySelector('#pictureItem').classList.remove('focus');
        document.querySelector('#numberItem').classList.remove('focus');
    };
}

function displayColor() {
    displayNone();
    colorAreaDiv.style.display = 'flex';
    if (colorAreaDiv.style.display == 'flex') {
        document.querySelector('#shapeItem').classList.remove('focus');
        document.querySelector('#designItem').classList.remove('focus');
        document.querySelector('#textItem').classList.remove('focus');
        document.querySelector('#colorItem').classList.add("focus");
        document.querySelector('#pictureItem').classList.remove('focus');
        document.querySelector('#numberItem').classList.remove('focus');
    };
}

function displayPicture() {
    displayNone();
    pictureAreaDiv.style.display = 'flex';
    if (pictureAreaDiv.style.display == 'flex') {
        document.querySelector('#shapeItem').classList.remove('focus');
        document.querySelector('#designItem').classList.remove('focus');
        document.querySelector('#textItem').classList.remove('focus');
        document.querySelector('#colorItem').classList.remove('focus');
        document.querySelector('#pictureItem').classList.add("focus");
        document.querySelector('#numberItem').classList.remove('focus');
    };
}

function displayNumber() {
    displayNone();
    numberAreaDiv.style.display = 'flex';
    if (numberAreaDiv.style.display == 'flex') {
        document.querySelector('#shapeItem').classList.remove('focus');
        document.querySelector('#designItem').classList.remove('focus');
        document.querySelector('#textItem').classList.remove('focus');
        document.querySelector('#colorItem').classList.remove('focus');
        document.querySelector('#pictureItem').classList.remove('focus');
        document.querySelector('#numberItem').classList.add("focus");
    };
}












//textArea步驟動態顯示
// 8/29 textArea改為2步驟
let textArea1st = document.querySelector('#textArea-1st');
let textArea2nd = document.querySelector('#textArea-2nd');
// let textArea3rd = document.querySelector('#textArea-3rd');

function textStepDisplayNone() {
    textArea1st = document.querySelector('#textArea-1st');
    textArea2nd = document.querySelector('#textArea-2nd');
    // textArea3rd = document.querySelector('#textArea-3rd');

    textArea1st.style.display = 'none';
    textArea2nd.style.display = 'none';
    // textArea3rd.style.display = 'none';
}

function display1stStep() {
    textStepDisplayNone();
    textArea1st.style.display = 'flex';
}

function display2ndStep() {
    textStepDisplayNone();
    textArea2nd.style.display = 'flex';
}

// function display3rdStep() {
//     textStepDisplayNone();
//     textArea3rd.style.display = 'flex';
// }

// 讓用戶在textArea-1st 輸入的文字呈現在textArea-3rd的文字方塊內
// 8/29 textArea改為2步驟
// let getTextStyleInput = document.getElementById('textStyle');
// getTextStyleInput.addEventListener('change', function () {
//     document.getElementById('textWords').value = getTextStyleInput.value;
// });
// 同步顯示在球衣上
let getTextStyleInput = document.getElementById('textStyle');
getTextStyleInput.addEventListener('keyup', function () {
    // 用forEach顯示陣列中所有的值
    document.querySelectorAll('.showTxtOnJersy').forEach((element) => {
        element.innerText = getTextStyleInput.value;
    });
});


// textSize Range設定 => 參考https://codepen.io/davidsonaguiar/pen/ExvvaRz
let getTextSize = document.querySelector('.textsizeRange');
getTextSize.addEventListener('input', function () {
    let chooseTextSize = document.getElementById('chooseTextSize');
    let textSizeValue = document.getElementById('textSizeValue');
    var x = chooseTextSize.value;
    // 資料型態轉換成number
    x = Number(x);
    // 設定range滑條的樣式
    chooseTextSize.style.background = `linear-gradient(to right, var(--Orange) ${(x - 3) * 8.3}%,  rgba(255,255,255,.5) ${(x - 3) * 8.3}%)`;
    // 設定spane顯示的數字隨著x變化
    textSizeValue.textContent = `${x}`;

    // 同步變更球衣上的字體大小
    document.querySelectorAll('.showTxtOnJersy').forEach((element) => {
        element.style.fontSize = `${(x + 3) * 4}px`;
    });
});

// NumSize Range設定
let getNumSize = document.querySelector('.NumsizeRange');
getNumSize.addEventListener('input', function () {
    let chooseNumSize = document.getElementById('chooseNumSize');
    let NumSizeValue = document.getElementById('NumSizeValue');
    var x = chooseNumSize.value;
    // 資料型態轉換成number
    x = Number(x);
    // 設定range滑條的樣式
    chooseNumSize.style.background = `linear-gradient(to right, var(--Orange) ${(x - 3) * 8.3}%,  rgba(255,255,255,.5) ${(x - 3) * 8.3}%)`;
    // 設定spane顯示的數字隨著x變化
    NumSizeValue.textContent = `${x}`;

    // 同步變更球衣上的字體大小
    document.querySelectorAll('.showNumOnJersy').forEach((element) => {
        element.style.fontSize = `${(x + 10) * 7}px`;
    });
});



// 輸入number顯示在球衣上
let inputNumber = document.getElementById('inputNumber');
inputNumber.addEventListener('keyup', function () {
    document.querySelectorAll('.showNumOnJersy').forEach((element) => {
        element.innerText = inputNumber.value;
    });
});


// 上傳圖片預覽 =>參考https://medium.com/coding-hot-pot/%E5%A6%82%E4%BD%95%E5%AF%A6%E4%BD%9C%E9%A0%90%E8%A6%BD%E4%B8%8A%E5%82%B3%E5%9C%96%E7%89%87%E5%8A%9F%E8%83%BD-8d75d814035a
document.getElementById('uploadPicture').addEventListener('change', function (e) {
    let showPicture = document.getElementById('showPicture').src;
    // 2. 使用完畢後釋放 URL
    if (showPicture.startsWith('blob:')) {
        URL.revokeObjectURL(showPicture);
    }
    // 1.createObjectURL (使用e.target.files)
    let getPictureUrl = e.target.files[0];
    let pictureURL = URL.createObjectURL(getPictureUrl);
    document.getElementById('showPicture').src = pictureURL;

    document.getElementById('uploadPictureBtn').addEventListener('click', () => {
        let getShowImgOnJersy = document.getElementsByClassName('showImgOnJersy');
        // collection的結果並非真正的陣列，不能使用forEach
        for (let i = 0; i < getShowImgOnJersy.length; i++) {
            // console.log(getShowImgOnJersy[i]);
            let ImgTag = getShowImgOnJersy[i];
            ImgTag.src = pictureURL;
        }
    })
});


