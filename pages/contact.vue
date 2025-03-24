<template>
  <div>
    <section>
      <div>
        <div><img src="" alt="" /></div>
        <div>github</div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <h2>LinkedIn</h2>
          <p>Interessado no meu perfil?</p>
          <p>
            No LinkedIn, você encontra mais sobre minha trajetória e projetos.
          </p>
        </div>
        <button>Conecte-se</button>
      </div>
    </section>
    <section>
      <h3>Entre em contato pelo formulário abaixo</h3>
    </section>
    <section>
      <div>
        <label for="assunto">Assunto:</label>
        <input
          type="text"
          id="assunto"
          name="assunto"
          placeholder="Digite o assunto da sua mensagem"
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu endereço de email"
        />
      </div>
      <div>
        <label for="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escreva sua mensagem aqui"
        ></textarea>
      </div>
      <button type="submit">Enviar Mensagem</button>
    </section>
  </div>
</template>

<script setup></script>

<style scoped></style>
