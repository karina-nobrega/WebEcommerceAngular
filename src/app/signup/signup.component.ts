import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})

export class SignupComponent {

  signupForm!: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      dataNasc: [null, [Validators.required]],
      genero: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      enderecoCobrança: [false],
      enderecoEntrega: [false],
      identEndereco: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      logradouro: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      numeroEnd: [null, [Validators.required]],
      complemento: [null, [Validators.required]],
      bairro: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      estado: [null, [Validators.required]],
      pais: [null, [Validators.required]],
      numCartao: [null, [Validators.required]],
      validade: [null, [Validators.required]],
      codSeguranca: [null, [Validators.required]],
      nomeCartao: [null, [Validators.required]],
      bandCartao: [null, [Validators.required]],
      cartaoFavorito: [false],
    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onCancel() {
    this.signupForm.reset();
  }

  onSubmit(): void {
    const password = this.signupForm.get('password')?.value;
    const confirmPassword = this.signupForm.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      this.snackBar.open('As senhas não são iguais', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      return;
    }

    this.authService.register(this.signupForm.value).subscribe(
      (response) => {
        this.snackBar.open('Cadastro realizado com sucesso!', 'Close', { duration: 5000 });
        this.router.navigateByUrl("/login");
      },
      (error) => {
        this.snackBar.open('Falha ao Cadastrar! Por favor, tente novamente', 'Close', { duration: 5000, panelClass: 'error-snackbar' });
      }
    );
  }
}

