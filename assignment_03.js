'use strict';
//password to enter time
//
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexa = /sinhvien@funix.edu.vn/;
const btnsubmit = document.querySelector('.submit_btn');
const result = document.querySelector('.passwordtime');
const btn_input_info = document.querySelector('.p_info_input');
// const retun = document.querySelector('.');

btnsubmit.addEventListener('click', function () {
  //check input
  let ace = document.getElementById('submit_it').value;
  if (regexa.test(ace)) {
    result.classList.remove('hidden');
    btn_input_info.classList.add('hidden');
  }else {
    console.log('error, please type correctly the email');
  }
  //function finished, now i need the requiered input
});
//hover btn info timeeeeeeee
const btn_open_info = document.querySelectorAll('.btn_hover');
const btn_close_info = document.querySelectorAll('.rere');
for (let i = 0; i < 6; i++) {
  //open
  btn_open_info[i].addEventListener('click', function () {
    if (document.querySelector(`.jobcon_${i}`).classList.contains('hidden')) {
      document.querySelector(`.btn_info_${i}`).textContent = 'View less';
      document.querySelector(`.jobcon_${i}`).classList.remove('hidden');
      document.querySelector(`.jobcon_${i}`).classList.add('rere');
    } else {
      document.querySelector(`.btn_info_${i}`).textContent = 'View more';
      document.querySelector(`.jobcon_${i}`).classList.add('hidden');
      document.querySelector(`.jobcon_${i}`).classList.remove('rere');
    }
  });

  //close
}

// for (let i = 0; i < 6; i++) {
//   btn_open_info[i].addEventListener('click', function () {
//     console.log(`this isn't ${i}`);
//     if (btn_open_info[i].classList.contains('rere')) {
//       document.querySelector(`.btn_info_${i}`).textContent = 'View more';
//       document.querySelector(`.jobcon_${i}`).classList.add('hidden');
//       document.querySelector(`.btn_info_${i}`).classList.remove('rere');
//     }
//   });
// }

// btn_hidden.addEventListener('hover', function () {});
//tests
console.log('password for in4: sinhvien@funix.edu.vn');
