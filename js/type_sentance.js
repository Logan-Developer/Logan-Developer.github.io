const carouselTextEn = [
    " am a student in I.T",
    " want to become a software engineer",
    " enjoy making websites",
    " enjoy making apps",
    " enjoy making Android custom OS",
    " am dreaming of living in the United States"
  ]

  const carouselTextFr = [
    "e suis étudiant en informatique",
    "e veux devenir ingénieur logiciel",
    "'aime créer des sites web",
    "'aime créer des applications",
    "'aime créer des OS Android personnalisés",
    "e rêve de vivre aux Etats-Unis"
  ]

  const carouselText = () => {
    const lang = window.localStorage.getItem('i18nextLng');

    if (lang === 'fr') {
      return carouselTextFr
    } else {
      return carouselTextEn
    }
  }
  
  $( document ).ready(async function() {
    if (window.screen.width >= 1400) {
      carousel(carouselText(), "#feature-text")
    }
    else {
      typeSentence(carouselText()[0], "#feature-text", 0);
    }
  });
  
  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        await typeSentence(carouselList[i], eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }