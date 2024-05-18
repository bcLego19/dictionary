async function fetchDefinition() {
    const word = document.getElementById("wordInput").value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      const definitionData = jsonData[0];
  
      let output = `<b>Word:</b> ${definitionData.word}<br>`;
      for (const meaning of definitionData.meanings) {
        output += `<b>Part of Speech:</b> ${meaning.partOfSpeech}<br>`;
        for (const definition of meaning.definitions) {
          output += `* ${definition.definition}<br>`;
          if (definition.example) {
            output += `<i>Example:</i> ${definition.example}<br>`;
          }
        }
        output += `<br>`;
      }
      const searchResult = document.getElementById("searchResult");
      searchResult.innerHTML = output;
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., display an error message to the user)
    }
  }
  