@extends('layouts.layout-index')

@section('title', 'Codizer - Portafolio')

@section('extra-css')
@endsection

@section('content')
    <div class="container">

        <div class="index-slider">
		 	<div class="slider-item">
				<p>Power GYM (In progress)</p>
				<h1><span>P</span>ower GYM (In progress)</h1>
				<div class="slider-img">
					<img src="{{ asset('media/photo-item/img-01.png') }}" />
				</div>
				<a href="#" class="generic-btn">Read more</a>
		  	</div>

		  	<div class="slider-item">
				<p>Power GYM (In progress)</p>
				<h1><span>P</span>ower GYM (In progress)</h1>
				<div class="slider-img">
					<img src="{{ asset('media/photo-item/img-01.png') }}" />
				</div>
				<a href="#" class="generic-btn">Read more</a>
		  	</div>

		  	<div class="slider-item">
				<p>Power GYM (In progress)</p>
				<h1><span>P</span>ower GYM (In progress)</h1>
				<div class="slider-img">
					<img src="{{ asset('media/photo-item/img-01.png') }}" />
				</div>
				<a href="#" class="generic-btn">Read more</a>
		  	</div>
		</div>

    </div>
@endsection

@section('extra-js')
@endsection