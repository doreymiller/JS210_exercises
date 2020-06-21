// function logInBox(string) {
//   var padding = 1;
//   var innerWidth = string.length + (padding * 2);
//   var edgeLine = "+" + "-".repeat(innerWidth) + "+";
//   var paddingLine = "|" + " ".repeat(innerWidth) + "|";

//   console.log(edgeLine);
//   console.log(paddingLine);
//   console.log("| " + string + " |");
//   console.log(paddingLine);
//   console.log(edgeLine);
// }

//further exploration
function logInBox(string, width) {
  var padding = 1;
  var textWidth = (width === undefined) ? string.length : width;
  var innerWidth = textWidth + (padding * 2);
  var edgeLine = "+" + "-".repeat(innerWidth) + "+";
  var paddingLine = "|" + " ".repeat(innerWidth) + "|";

  console.log(edgeLine);
  console.log(paddingLine);

  logString(string, textWidth);

  console.log(paddingLine);
  console.log(edgeLine);
}

function logString(string, textWidth) {
  var currentChar = 0;

  if (textWidth < string.length) {
    var lines = stringToLines(string, textWidth);

    for (var i = 0; i < lines.length; i++) {
      logStringLine(lines[i]);
    }

  } else {
    logStringLine(string);
  }
}

function logStringLine(string) {
  console.log("| " + string + " |");
}

function stringToLines(string, textWidth) {
  var lines = [];
  var words = string.split(" ");
  
  while (words.length > 0) {
    var lineText = "";
    var charCount = 0;

    while (charCount < textWidth && words.length > 0) {
      
      if (charCount + words[0].length > textWidth) {
        break;
      } else {
        var addedString = words.shift() + " ";
        lineText += addedString;
        charCount += addedString.length;
      }

    }

    if (lineText.length < textWidth) {
      lineText = lineText.padEnd(textWidth);
    }

    lines.push(lineText);
  }

  return lines;
}

// function truncateString(string, startIndex, textWidth) {
//   var lineText = string.substring(startIndex, startIndex + textWidth);

//   if (lineText.length < textWidth) {
//     lineText = lineText.padEnd(textWidth);
//   }

//   return lineText;
// }

logInBox('To boldly go where no one has gone before.', 15);
logInBox('');

