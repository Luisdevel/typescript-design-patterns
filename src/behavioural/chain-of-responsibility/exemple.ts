abstract class ObjetoCadeia {
  protected proximo: ObjetoCadeia | null;

  adcProximo(proximo: ObjetoCadeia): ObjetoCadeia {
    this.proximo = proximo;
    return proximo;
  }

  trata(requisicao: string): string {
    if (this.proximo) return this.proximo.trata(requisicao);
    return requisicao;
  }
}

class ObjA extends ObjetoCadeia {
  trata(requisicao: string): string {
    return super.trata(requisicao + 'ObjA, ');
  }
}

class ObjB extends ObjetoCadeia {
  trata(requisicao: string): string {
    return super.trata(requisicao + 'ObjB, ');
  }
}

const objetoA = new ObjA();
objetoA.adcProximo(new ObjB()).adcProximo(new ObjB()).adcProximo(new ObjA());
console.log(objetoA.trata('Initial, '));
