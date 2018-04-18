<!DOCTYPE html>
<html>
  <head>
    <title>All cars</title>
  </head>
  <body>
    <h1>List of all available cars</h1>
    @foreach($cars as $car)
    <ul>
      <li>Make: {{ $car->make }}</li>
      <li>Model: {{ $car->model }}</li>
      <li>Produced on: {{ $car->produced_on }}</li>
    </ul>
    <a href= {{ "/cars/" . $car->id }} >Details</a>
    <hr/>
    @endforeach
  </body>
</html>