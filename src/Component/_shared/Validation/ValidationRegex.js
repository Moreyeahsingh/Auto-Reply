// export const convertToMobileNumber = (mobileNum) => {
//   if (mobileNum.length != 10) {
//     return mobileNum;
//   }
//   let arr = mobileNum.split("") ?? [];
//   arr.unshift("(");
//   arr.splice(4, 0, ")");
//   arr.splice(5, 0, " ");
//   arr.splice(9, 0, "-");
//   return arr.join("");
// };
export const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validPassword = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

// export const RegexCollection = () => {
//   removeSpaceRegex = /\s/g;

//   phoneNumberRegex =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

//   // EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   DateFormat = "mm/dd/yyyy";
//   DateTimeFormat = "MM/DD/yyyy HH:mm:ss";

//   //Validation Regex
//   requiredString = /^(\S+)$/;
//   stringNumber = /^[0-9]*$/;
//   //
//   FileRegex = /((content|file):\/)?\/.*/;

//   ImageFileRegex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i;

//   AssetsFileRegex =
//     /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif|mp4|mov|wmv|avi|mkv|mpeg))/i;
//   FileName = /^.*[\\\/]/;
//   FileExtension = /(?:\.([^.]+))?$/;
// };
