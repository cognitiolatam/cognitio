(function(window, undefined) {
  var dictionary = {
    "d0143e1e-5d32-48cd-9231-81e984d8be82": "Vision",
    "abde5738-15fd-4060-82e3-82e04eb2d69e": "Home_Profesor",
    "b3c6ea5a-443c-4eaf-bf6f-302fe7151eb8": "Perfil Profesor",
    "1489f61d-be16-44cd-a29e-31718fa87f5f": "Mensajes_Chat",
    "6c9a43a3-2465-4ed5-8cfc-bc802f7ecad2": "Nosotros",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "21eef35a-9d9d-4820-bb90-70ec46ae3953": "Materias",
    "23a5bd3a-bc8e-4250-862a-5375e6ef7d4c": "Fisica_1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Encabezados y Pie de Pagina",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);