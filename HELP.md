# Ajuda - PetShop Amigo Fiel

Este site foi desenvolvido como parte do Projeto da Disciplina de Fundamentos de Sistemas Web.

Abaixo estão descritas as funcionalidades disponíveis.

## Páginas disponíveis

acessórios (roupas, brinquedos, camas, etc.), rações não perecíveis e produtos de higiene e limpeza (tapete higiênico, fraldas, etc.).

- **Início (`index.html`):** página inicial da petshop, com carrossel de destaques e saudação que muda conforme o horário (Bom dia/Boa tarde/Boa noite).
- **Acessórios (`acessorios.html`):** exibe produtos como roupas, brinquedos e camas, com foto, descrição e valor.
- **Rações (`racoes.html`):** exibe rações não perecíveis, com foto, descrição e valor.
- **Higiene e Limpeza (`produtos-de-higiene.html`):** exibe produtos como tapetes higiênicos e fraldas, com foto, descrição e valor.
- **Serviços (`servicos.html`):** exibe os serviços de banho e tosa oferecidos, com valores, e um formulário para agendar o atendimento.
- **Cadastro (`cadastro.html`):** formulário para cadastro de cliente e do pet.

## Navegação

Todas as páginas possuem um cabeçalho com menu de navegação (incluindo um submenu "Produtos" com as três categorias) que permite acessar qualquer outra página do site, e um rodapé com informações legais, contato e autoria do sistema. O menu se adapta a telas menores (celular/tablet), recolhendo-se em um botão de menu.

## Interatividade

- **Carrossel:** a página inicial exibe um carrossel com destaques das categorias de produtos e do serviço de banho e tosa, com navegação por setas e indicadores.

## Cadastro (`cadastro.html`)

Formulário para cadastro de cliente e pet, com campos de nome, email, CPF, telefone, data de nascimento, sexo, endereço e dados do pet (nome, raça, data de nascimento, sexo). É necessário aceitar os termos de uso para enviar. Os dados são enviados por email através do serviço FormSubmit.

## Agendamento de serviço (`servicos.html`)

Ao final da página de Serviços, há um formulário para agendar banho e/ou tosa, com escolha do tipo de atendimento (tele-busca ou entrega no local), data e horário. A data mínima selecionável é sempre o dia atual. É necessário selecionar ao menos um serviço (banho e/ou tosa) para enviar. Os dados também são enviados por email através do FormSubmit.

## Acessibilidade

- Todas as imagens possuem texto alternativo (`alt`) descritivo.
- Os campos de formulário possuem `label` associado, e os grupos de opções (sexo, serviços, atendimento) usam `fieldset`/`legend`.
- A navegação e os formulários funcionam via teclado, seguindo os padrões nativos do HTML e do Bootstrap.
