const LocationTime = () => {
  return (
    <div className="mb-8 sm:mb-0">
      <h3 className="text-xl mb-4">Ubicación y horarios</h3>
      <div>
        <img src="https://maps.google.com/maps/api/staticmap?&channel=ta.desktop.restaurant_review&zoom=15&size=347x137&scale=1&client=gme-tripadvisorinc&format=jpg&sensor=false&language=es_CL&center=-33.441883,-70.632385&maptype=roadmap&&markers=icon:http%3A%2F%2Fc1.tacdn.com%2F%2Fimg2%2Fmaps%2Ficons%2Fcomponent_map_pins_v1%2FR_Pin_Small.png|-33.441883,-70.632385&signature=nR7QpN0_upOa2H_6egc1w13A9Ms=" />
        <p className="my-2">Av Italia 940, Santiago</p>
      </div>
      <div>
        <p className="my-2 font-bold">Horarios</p>
        <ul>
          <li>Lunes 9:00 - 19:00</li>
          <li>Martes 9:00 - 19:00</li>
          <li>Miercoles 9:00 - 19:00</li>
          <li>Jueves 9:00 - 19:00</li>
          <li>Viernes 9:00 - 19:00</li>
          <li>Sábado 9:00 - 19:00</li>
          <li>Domingo cerrado</li>
        </ul>
      </div>
    </div>
  );
};

export default LocationTime;
