'use strict'

export const produtos = async () => {
   
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/produto`
    const response = await fetch(url)
    const data = await response.json()
    const { produtos } = data;
    console.log(produtos)
    return {
        ...data
    } 
}

export const excluirProduto = async (produtoId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o produto?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/produto/${produtoId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Produto excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o produto.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};



export const projetos = async () => {
   
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/projeto`
    const response = await fetch(url)
    const data = await response.json()
    const { projetos } = data;
    console.log(projetos)
    return {
        ...data
    }
}

export const excluirProjeto = async (projetoId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o projeto?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/projeto/${projetoId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Produto excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o produto.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};



export const patrocinadores = async () => {
   
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/patrocinador`
    const response = await fetch(url)
    const data = await response.json()
    const { patrocinadores } = data;
    console.log(patrocinadores)
    return {
        ...data
    }   
}

export const excluirPatrocinador = async (patrocinadorId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o patrocinador?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/patrocinador/${patrocinadorId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Patrocinador excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o patrocinador.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};

export const voluntarios = async () => {
   
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/voluntario`
    const response = await fetch(url)
    const data = await response.json()
    const { voluntarios } = data;
    console.log(voluntarios)
    return {
        ...data
    }   
}
export const excluirVoluntarios = async (voluntarioId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o administrador?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/voluntario/${voluntarioId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Voluntario excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o voluntario.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};


export const recados = async () => {
   
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/recado`
    const response = await fetch(url)
    const data = await response.json()
    const { recados } = data;
    console.log(recados)
    return {
        ...data
    }   
}

export const adm = async () => {
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/administrador`
    const response = await fetch(url)
    const data = await response.json()
    const { administradores  } = data;
    console.log(administradores )
    return {
        ...data
    }   
}

export const excluirAdministrador = async (administradorId) => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir o administrador?');

    if (!confirmacao) {
        return; // Se o usuário cancelar a exclusão, a função é interrompida
    }

    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/administrador/${administradorId}`;
    const options = {
        method: 'DELETE',
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Administrador excluído com sucesso!');
        } else {
            console.error('Erro ao excluir o administrador.');
        }
    } catch (error) {
        console.error('Erro ao fazer a requisição DELETE:', error);
    }
};

export const doacoes = async () => {
   
    const url = `https://tomorrows-water.onrender.com/v1/tomorrows-water/doacao`
    const response = await fetch(url)
    const data = await response.json()
    const { doacoes } = data;
    console.log(doacoes)
    return {
        ...data
    }   
}