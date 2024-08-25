import { useState } from 'react';

function useAcao() {
const [contador, setContador] = useState(0);

const aumentar = () => {
    setContador(contador + 1);
};

const diminuir = () => {
    setContador(contador - 1);
};

return { contador, aumentar, diminuir };
}

export default useAcao;
