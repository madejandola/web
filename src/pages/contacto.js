import * as React from "react";
import Layout from "../components/Layout";
import { Helmet } from "react-helmet";
import Seo from "../components/Seo";

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Contacto" />
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-full prose prose-xl">
            <h1>Sobre MadejándoLA</h1>
            <article>
              <div className="inner">
                <h2>¿Qué hacemos?</h2>

                <p>En MadejándoLA contamos las historias detrás de las tradiciones textiles de América Latina. Creemos en el poder de las narrativas para comunicar cosas importantes. En los textiles artesanales, las técnicas son importantes, pero los creadores lo son más.</p>

                <p>Los textiles originarios son piezas creadas a partir de una cosmovisión, con técnicas y materiales propias del lugar y que dan fe de sus procesos históricos y sociales. Este proyecto es un espacio en el que se están generando productos con la intención de crear nuevos archivos de patrimonio digital.</p>

                <p>Cada textil cuenta una historia, es un libro escrito con hilos. Es por esto que al unirlos digitalmente en imágenes, textos, audios y videos estamos creando un acervo de estos documentos a los cuales se puede acceder desde cualquier lugar con una conexión a Internet.</p>

                <p>MadejándoLA viaja para recopilar imágenes e historias de lo que pasa hoy con los textiles originarios. Juntamos testimonios de los procesos por los que atraviesan las tradiciones textiles de Latinoamérica en la actualidad. También entrevistamos a artistas, investigadores y referentes del textil artesanal para conocer sus perspectivas sobre el presente de este universo hecho de hilos.</p>
              </div>
            </article>
            <article>
              <div className="inner">
                <h2>¿Por qué MadejándoLA?</h2>
                <p>Las tradiciones textiles son resistencias. Resistencias silenciosas que encuentran su modo de sobrevivir a través del dinamismo y la transformación. Se van reconfigurando con el tiempo y son producto de la creatividad nata y la capacidad de adaptación de los pueblos originarios. Son resistencias silentes y resilientes, portadoras de diversidad.</p>

                <p>Es nuestro objetivo mostrar en esta plataforma otras formas de trabajar, de pensar y de crear. Éstas aportan a la visibilización de alternativas, haciendo así contrapeso a las estéticas dominantes que inundan la web, las redes sociales y los medios de comunicación masiva.</p>

                <p>La apropiación cultural es una realidad y esperamos con esta visión, sumar argumentos para la protección de los derechos culturales y patrimoniales de los pueblos.</p>
              </div>
            </article>
            <article>
              <div className="inner">
                <h2>¿A quién sirve?</h2>

                <div className="destinado">
                  <div className="destinado-item aos-init aos-animate" data-aos="zoom-in">Amantes del textil</div>
                  <div className="destinado-item aos-init aos-animate" data-aos="zoom-in">Curiosos</div>
                  <div className="destinado-item aos-init aos-animate" data-aos="zoom-in">Investigadores</div>
                  <div className="destinado-item aos-init aos-animate" data-aos="zoom-in">Estudiantes</div>
                  <div className="destinado-item aos-init aos-animate" data-aos="zoom-in">Diseñadores</div>
                </div>
              </div>
            </article>
            <article className="donate">
              <div className="inner">
                <h2>Dona</h2>
                <h3>¿Te gusta lo que hacemos? Puedes ayudarnos a contar más historias donando a MadejándoLA. Con tu dinero podremos gestionar viajes, pagar a nuestros colaboradores y sostener el mantenimiento y actualización del sitio.</h3>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="EE5AHVYNNZ5BY" />
                  <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donar con el botón PayPal" />
                  <img alt="" border="0" src="https://www.paypal.com/es_MX/i/scr/pixel.gif" width="1" height="1"/>
                </form>
              </div>
            </article>
            <article>
              <div className="inner">
                <h2>SERVICIOS</h2>
                <h4>Nos especializamos en comunicación visual dedicada a proyectos de producción y difuisión de técnicas artesanales, principalmente de textiles pero no exclusivamente.</h4>

                <h3>Ofrecemos siguientes servicios de comunicación visual:</h3>

                <div className="servicios">
                  <div className="item-servicios">Creación de cortometrajes, piezas narrativas audiovisuales y multimedia.</div>
                  <div className="item-servicios">Fotografía de procesos productivos, eventos, producto.</div>
                  <div className="item-servicios">Diseño gráfico y visual: Logotipos, afiches y contenidos para redes.</div>
                </div>
              </div>
            </article>
            <article>
              <div className="inner">
                <h2>Contacto</h2>
                <h4>Trabajamos desde la sensibilidad y la empatía hacia propuestas sociales y comunitarias. Ofrecemos trabajo de alta calidad y mucho profesionalismo. Actualmente nos encontramos establecidas en Buenos Aires, Argentina y trabajamos presencialmente o a distancia, dependiendo el proyecto.</h4>

                <h3>¿Eres parte de una cooperativa, grupo o red artesanal?</h3>
                <h3>¿Estás gestionando un evento de difusión o encuentro de técnicas artesanales y/o pueblos originarios?</h3>

                <h4>Si necesitas servicios de diseño y comunicación ¡Contáctanos!</h4>

                <p>
                  <b>madejandola@gmail.com • Tel. +5491137704486</b>
                </p>

              
              </div>
            </article>
            <article>
              <div className="inner">
                <h3>Estamos orgullosas de haber colaborado en el pasado con organizaciones de distintas latitudes y agradecemos su confianza.</h3>
                <div className="confian">
                  <div className="item-confian">Tepeni</div>
                  <div className="item-confian">MonteGabriela</div>
                  <div className="item-confian">Mujeres Maya Mam</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
