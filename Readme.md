# Recuperação de senha

** RF **
[x] O usuario deve poder recuperar sua senha informando o seu email ;
[] O usuario deve receber um email com instruções de recuperação de senha;
[] O usuario deve poder resetar sua senha;

** RNF **
- Utilizar Mailtrap para emails em desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de emails deve acontecer em segundo plano (background job);

** RN **
- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a senha ao resetar;


# Atualização do perfil

** RF **

- O usuário deve poder alterar seu email e senha;

** RN **

- O usuário não pode alterar seu email para um email já utilizado
- Para atualizar a sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

** RF **

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador  deve poder visualizar as notificações não lidas;

** RNF **

- Os agendamentos devem ser guardados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador deve ser enviadas em tempo-real utilizando Socket.io

** RN **

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de serviços

** RF **

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de pelo menos um prestador;
- O usuário deve poder listar horários disponíveis em um dia específicos de um prestador;
- O usuário deve poder realizar um novo  agendamento com um prestador;

** RNF **

- A lista de prestadores deve ser armazenada em cache;

** RN **

- Cada agendamento deve durar uma hora exatamente;
- Os agendamentos devem estar disponiveis entre as 8h às 18h (Primeiro às 8h ultimo as 17h)
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
