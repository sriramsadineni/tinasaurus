// const sidebarData = require("./config/sidebar/index.json");

// const getDocId = (doc) => {
//   return doc
//     .replace(/\.mdx?$/, "")
//     .split("/")
//     .slice(1)
//     .join("/");
// };

// const getItem = (item) => {
//   const type = item["_template"];

//   let itemProps:any = {
//     type: type,
//   };

//   if (type === "doc") {
//     if (!item.document) {
//       return [];
//     }

//     itemProps.id = getDocId(item.document);

//     if (item.label) {
//       itemProps.label = item.label;
//     }
//   }
  

//   if (type === "category") {
//     if (item.title) {
//       itemProps.label = item.title;
//     }

//     if (item.link && item.link !== "none") {
//       if (item.link === "doc" && item.docLink) {
//         itemProps.link = {
//           type: "doc",
//           id: getDocId(item.docLink),
//         };
//       } else if (item.link === "generated") {
//         itemProps.link = {
//           type: "generated-index",
//         };
//       } else {
//         return [];
//       }
//     }

//     itemProps.items = item.items.flatMap((item) => {
//       return getItem(item);
//     });
//   }

//   if (type === "link") {
//     if (item.href && item.title) {
//       itemProps.label = item.title;
//       itemProps.href = item.href;
//     } else {
//       return [];
//     }
//   }

//   return [itemProps];
// };

// const sidebars = {
//   docSidebar: sidebarData.items.flatMap((item) => {
//     return getItem(item);
//   }),
// };

// export default sidebars;


const getDocId = (doc) => {
  return doc
    .replace(/\.mdx?$/, "")
    .split("/")
    .slice(1)
    .join("/");
};

const getItem = (item) => {
  const type = item["_template"];

  let itemProps:any = {
    type: type,
  };

  if (type === "doc") {
    if (!item.document) {
      return [];
    }

    itemProps.id = getDocId(item.document);

    if (item.label) {
      itemProps.label = item.label;
    }
  }
  

  if (type === "category") {
    if (item.title) {
      itemProps.label = item.title;
    }

    if (item.link && item.link !== "none") {
      if (item.link === "doc" && item.docLink) {
        itemProps.link = {
          type: "doc",
          id: getDocId(item.docLink),
        };
      } else if (item.link === "generated") {
        itemProps.link = {
          type: "generated-index",
        };
      } else {
        return [];
      }
    }
    if(item.items){
      itemProps.items = item.items.flatMap((item) => {
        return getItem(item);
      });
    }
    else{
      itemProps.items = []
    }
    
  }

  if (type === "link") {
    if (item.href && item.title) {
      itemProps.label = item.title;
      itemProps.href = item.href;
    } else {
      return [];
    }
  }

  return [itemProps];
};


const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, './config/sidebar');
let sidebars:any ={}

try {
  // Synchronously read the directory
  const files = fs.readdirSync(directoryPath);

  const allSidebarData = files
    .filter(file => file.endsWith('.json'))  // Only process .json files
    .map(file => {
      const filePath = path.join(directoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(fileContent);  // Parse each file as JSON
    });
  // Example to process each sidebar configuration as needed
  allSidebarData.forEach(sidebarData => {  
    var _dide =  sidebarData.items.flatMap(item=>{
        return getItem(item)
    });

    sidebars[sidebarData.id] = _dide;
  });
  

  if(!sidebars.apiReferenceSideBar){
    sidebars.apiReferenceSideBar = [];
  }
  sidebars.apiReferenceSideBar = sidebars.apiReferenceSideBar.concat({
    type: "category",
    label: "Api Reference",
    link: {
      type: "generated-index",
      title: "Petstore API (latest)",
      description:
        "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
      slug: "/category/petstore-api",
    },
    items: require("./docs/api-reference/sidebar"),
  })

} catch (err) {
  console.error('Error:', err);
}


export default sidebars;
