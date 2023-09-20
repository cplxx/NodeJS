import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString('hex');

  const senhaHasheada = scryptSync(senha, sal, 64);
  return `${sal}:${senhaHasheada.toString('hex')}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    const hashComSal = criaHashComSal(senha);
    [this.sal, this.hash] = hashComSal.split(':');
  }

  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeHash = scryptSync(senha, this.sal, 64);
      const hashReal = Buffer.from(this.hash, 'hex');

      const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

      if (hashesCorrespondem) {
        console.log('Usuário autenticado com sucesso');
        return true;
      }
    }

    console.log('Usuário ou senha incorretos.');
    return false;
  }
}


const jm = new Usuario('Joao Manoel', 'senhaSecreta');


jm.autentica('Joao Manoel', 'senhaSecreta');

jm.autentica('Jm', 'senhaSecreta');
jm.autentica('Jm', 'senhaErrada');
