package polymorphism;

//overridding
class Bird{
	public void sound() {
		System.out.println("ku ku ku");
	}
}
class Robin extends Bird{
	public void sound() {
		System.out.println("ko ko ko");
	}
}

//overloading
class Animal{
	void display() {
		System.out.println("without parameter");
	}
	void display(int value) {
		System.out.println("with parameter"+value);
	}
}



public class Polymorphism {
	public static void main(String[] args) {
		Robin bird=new Robin();
		bird.sound();
		
		Animal animal=new Animal();
		animal.display();
		animal.display(10);
	}

}