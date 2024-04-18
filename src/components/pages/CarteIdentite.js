import React, { useState, useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import AvatarEditor from 'react-avatar-editor';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function CarteIdentite() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [postnom, setPostnom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [adresse, setAdresse] = useState('');
  const [facebook, setFacebook] = useState('');
  const [youtube, setYoutube] = useState('');
  const [photo, setPhoto] = useState(null);
  const [carteGeneree, setCarteGeneree] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);
  const editorRef = useRef(null);
  const [qrData, setQrData] = useState('');
  const carteRef = useRef(null);

  useEffect(() => {
        if (carteGeneree) {
          html2canvas(carteRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'PNG', 0, 0, width, height);
            pdf.save('carte_identite.pdf');
          });
        }
      }, [carteGeneree]);

  const handleNomChange = (e) => {
    setNom(e.target.value);
    updateQRData();
  };

  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
    updateQRData();
  };

  const handlePostnomChange = (e) => {
    setPostnom(e.target.value);
    updateQRData();
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateQRData();
  };

  const handleAdresseChange = (e) => {
    setAdresse(e.target.value);
  };

  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };

  const handleYoutubeChange = (e) => {
    setYoutube(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleScaleChange = (e) => {
    const scale = parseFloat(e.target.value);
    setScaleValue(scale);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PHOTO,
    drop: (item) => {
      setPhoto(item.photo);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const genererCarte = () => {
    setCarteGeneree(true);
  };

  const updateQRData = () => {
    const data = `${nom} ${prenom} ${postnom} ${email}`;
    setQrData(data);
  };

  const telechargerCarte = () => {
        const carteElement = document.getElementById('carte-container');
        if (!carteElement) {
          console.error("L'élément de la carte n'a pas été trouvé.");
          return;
        }
      
        // Convertir l'élément DOM en blob
        carteElement.toBlob((blob) => {
          // Créer un objet URL à partir du blob
          const blobUrl = URL.createObjectURL(blob);
      
          // Créer un objet PDF
          const pdf = new jsPDF();
          const width = pdf.internal.pageSize.getWidth();
          const height = pdf.internal.pageSize.getHeight();
      
          // Ajouter l'image au PDF
          pdf.addImage(blobUrl, 'PNG', 0, 0, width, height);
      
          // Télécharger le fichier PDF
          pdf.save('carte_identite.pdf');
      
          // Libérer l'URL de l'objet blob
          URL.revokeObjectURL(blobUrl);
        });
      };
      

  return (
    <div className="container mt-5">
      {!carteGeneree ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Créer une carte d'identité étudiante</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">Nom :</label>
                <input type="text" id="nom" value={nom} onChange={handleNomChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">Prénom :</label>
                <input type="text" id="prenom" value={prenom} onChange={handlePrenomChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="postnom" className="form-label">Postnom :</label>
                <input type="text" id="postnom" value={postnom} onChange={handlePostnomChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="telephone" className="form-label">Téléphone :</label>
                <input type="text" id="telephone" value={telephone} onChange={handleTelephoneChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail :</label>
                <input type="text" id="email" value={email} onChange={handleEmailChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="adresse" className="form-label">Adresse :</label>
                <input type="text" id="adresse" value={adresse} onChange={handleAdresseChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="facebook" className="form-label">Facebook :</label>
                <input type="text" id="facebook" value={facebook} onChange={handleFacebookChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="youtube" className="form-label">YouTube :</label>
                <input type="text" id="youtube" value={youtube} onChange={handleYoutubeChange} className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="photo" className="form-label">Sélectionner une photo :</label>
                <input type="file" accept="image/*" id="photo" onChange={handleFileChange} className="form-control" />
              </div>
              <div className="mb-3" ref={drop}>
                <label htmlFor="carte" className="form-label">Carte d'identité :</label>
                <div className={`card profile-header ${isOver ? 'drag-over' : ''}`}>
                  <div className="body">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="profile-image float-md-right">
                          {photo && (
                            <AvatarEditor
                              ref={editorRef}
                              image={photo}
                              width={200}
                              height={200}
                              border={50}
                              color={[255, 255, 255, 0.6]}
                              scale={scaleValue}
                              borderRadius={100}
                            />
                          )}
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <h4 className="m-t-0 m-b-0"><strong>{nom} {prenom} {postnom}</strong></h4>
                        <span className="job_post">Étudiant</span>
                        <p>Téléphone : {telephone}</p>
                        <p>E-mail : {email}</p>
                        <p>Adresse : {adresse}</p>
                        <p>Facebook : {facebook}</p>
                        <p>YouTube : {youtube}</p>
                        <div>
                          <button className="btn btn-primary btn-round">Suivre</button>
                          <button className="btn btn-primary btn-round btn-simple">Message</button>
                        </div>
                        <p className="social-icon m-t-5 m-b-0">
                          <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                          <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                          <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                          <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                          <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="echelle" className="form-label">Échelle :</label>
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.01"
                  value={scaleValue}
                  onChange={handleScaleChange}
                  id="echelle"
                  className="form-range"
                />
              </div>
              <div>
                <h3>QR Code en temps réel :</h3>
                <QRCode value={qrData} />
              </div>
              <button onClick={genererCarte} className="btn btn-primary">Générer carte d'identité</button>
            </form>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Carte d'identité générée :</h2>
            <div className="card profile-header">
              <div className="body">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="profile-image float-md-right">
                      {photo && (
                        <AvatarEditor
                          ref={editorRef}
                          image={photo}
                          width={200}
                          height={200}
                          border={50}
                          color={[255, 255, 255, 0.6]}
                          scale={scaleValue}
                          borderRadius={100}
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <h4 className="m-t-0 m-b-0"><strong>{nom} {prenom} {postnom}</strong></h4>
                    <span className="job_post">Étudiant</span>
                    <p>Téléphone : {telephone}</p>
                    <p>E-mail : {email}</p>
                    <p>Adresse : {adresse}</p>
                    <p>Facebook : {facebook}</p>
                    <p>YouTube : {youtube}</p>
                    <div>
                      <button className="btn btn-primary btn-round">Suivre</button>
                      <button className="btn btn-primary btn-round btn-simple">Message</button>
                    </div>
                    <p className="social-icon m-t-5 m-b-0">
                      <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                      <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                      <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                      <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                      <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mt-3">QR Code :</h3>
              <QRCode value={qrData} />
            </div>

            <div className="mt-3">
              <button onClick={telechargerCarte} className="btn btn-primary">Télécharger en PDF</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarteIdentite;
