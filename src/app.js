
window.onload = () => {
  const who = ['Mi gato', 'Un novato', 'El entrenador', 'El dueño', 'Mi abuela'];
  const actions = ['vomitó sobre', 'se tropezó con', 'rompió', 'lanzó accidentalmente', 'escondió'];
  const objects = ['mis guantes', 'mi protector bucal', 'mi rodillera', 'mi mochila', 'el vendaje'];
  const when = ['justo antes del sparring', 'durante el calentamiento', 'mientras me vendaba', 'cuando llegué al gimnasio', 'en el vestuario'];

  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

  const generarExcusa = () => {
    const sujeto = getRandomItem(who);       
    const verbo = getRandomItem(actions);    
    const objeto = getRandomItem(objects);  
    const momento = getRandomItem(when);     

    return `${sujeto} ${verbo} ${objeto} ${momento}.`;
  };
 document.getElementById("excuse").innerText = generarExcusa();
};