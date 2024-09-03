import { EnvelopeSimple, GithubLogo, InstagramLogo, MapPin, YoutubeLogo } from "@phosphor-icons/react";

function Footer() {

  let date = new Date().getFullYear()

  return (
        <footer className=" flex flex-col">

            <div className=" w-full md:grid grid-cols-3 justify-items-center py-16 px-6">
              <div className="flex flex-col gap-y-3">
                {/* Contatos*/}
                <div>
                  <h3 className="mb-3 text-md text-green-700 font-bold">Contato</h3>
                  {/* Localização*/}
                  <div className="flex items-center gap-x-1 mb-3">
                    <MapPin size={25} color="#437228"/>
                    <p>Rio de Janeiro</p>
                  </div>
                  {/* Email*/}
                  <div className="flex items-center gap-x-1">
                    <EnvelopeSimple size={25} color="#437228"/>
                    <p>pi.saude.bemestar@gmail.com</p>
                  </div>
                </div>

                {/* Redes Sociais*/}
                <div className="mb-4 md:mb-0">
                  <h3 className="text-md my-3 font-bold text-green-700 ">Siga-nos</h3>
                  <div className="flex gap-3">
                    <YoutubeLogo size={30} color="#437228"/>
                    <InstagramLogo size={30} color="#437228"/>
                    <GithubLogo size={30} color="#437228"/>
                  </div>
                </div>

              </div>

              {/* Categorias*/}
              <div className="flex flex-col gap-1 md:gap-3 mb-5 md:mb-0">
                <h3 className="my-3 md:my-0 text-md text-green-700 font-bold">Categorias</h3>
                <ul className="*:text-green-700">
                  <li>Personal</li>
                  <li>Psicólogo</li>
                  <li>Nutricionista</li>
                  <li>Terapeuta</li>
                  <li>Yoga</li>
                  <li>Fisioterapeuta</li>
                </ul>
              </div>

              {/* Institucional*/}
              <div className="flex flex-col gap-1 md:gap-3">
                <h3 className="my-3 md:my-0 text-md text-green-700 font-bold">Institucional</h3>
                <ul className="*:text-green-700">
                  <li>Serviços</li>
                  <li>Quem Somos</li>
                  <li>Contatos</li>
                  <li>Entrar</li>
                  <li>Cadastrar</li>
                </ul>
              </div>

            </div>

            {/* Copyright*/}
            <div className="flex justify-center items-center py-4 border-t border-t-green-600">
              <p className="text-green-700">Copyright &#169; {date} Vital+ | ODS 3</p>
            </div>
        </footer>
  );
}

export default Footer;
