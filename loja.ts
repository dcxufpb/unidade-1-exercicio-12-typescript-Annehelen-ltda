import { Endereco } from "./endereco";

function isEmpty(str: string): boolean {
    let spaceCount = str.length - str.replace(" ", "").length;
    return str == null || spaceCount == str.length;}

export class Loja {

    constructor(public nome_loja: string, public endereco: Endereco,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public dados_loja(): string {
        // Implemente aqui

        if (isEmpty(this.nome_loja)) {
            throw new Error(`O campo nome da loja é obrigatório`);
          }
        if(isEmpty(this.endereco.logradouro)){
            throw new Error(`O campo logradouro do endereço é obrigatório`);
        }
        let num = this.endereco.numero + ""
        if(this.endereco.numero == 0){
            num = "s/n";
        }
        if(isEmpty(this.endereco.municipio)){
            throw new Error(`O campo município do endereço é obrigatório`);
        }
        if(isEmpty(this.endereco.estado)){
            throw new Error(`O campo estado do endereço é obrigatório`);
        }
        if(isEmpty(this.cnpj)){
            throw new Error(`O campo CNPJ da loja é obrigatório`);
        }
        if(isEmpty(this.inscricao_estadual)){
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
        }
    
        var part2 = `${this.endereco.logradouro}, ${num}`;
        if (! isEmpty (this.endereco.complemento)){
            part2 += ` ${this.endereco.complemento}`;
        }
        var part3 = "";
        if (! isEmpty (this.endereco.bairro)){
            part3 += `${this.endereco.bairro} - `;
        }
        part3 += `${this.endereco.municipio} - ${this.endereco.estado}`;
        
        var part4 = "";
        if (! isEmpty (this.endereco.cep)){
            part4 = `CEP:${this.endereco.cep}`;
        }
        if (! isEmpty(this.telefone)){
            if (! isEmpty(part4)){
            part4 += ` `;
            }
            part4 += `Tel ${this.telefone}`;
        }
        if (! isEmpty(part4)){
            part4 += `\n`;
        }
        var part5 = "";
        if (! isEmpty(this.observacao)){
            part5 += `${this.observacao}`;
        }
        let output = `${this.nome_loja}\n`;
        output += `${part2}\n`;
        output += `${part3}\n`;
        output += `${part4}`;
        output += `${part5}\n`;
        output += `CNPJ: ${this.cnpj}\n`;
        output += `IE: ${this.inscricao_estadual}\n`;
        return output;
    }
}