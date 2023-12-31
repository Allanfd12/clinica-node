var pacientesSearchUrl = '/paciente/search';
var medicosSearchUrl = '/medico/search';

$(document).ready(function () {
    $('.cpf').mask('000.000.000-00');
    $('.telefone').mask('(00) 00000-0000');
    $('.cep').mask('00000-000');
    $('.cpf').on('input', function () {
        var cpf = $(this).val();
        if (cpf.length === 14) {
            if (validarCPF(cpf)) {
                $(this).removeClass('invalid');
                
                $('.message-cpf').text('CPF válido!');
                $('.message-cpf').css('color', 'green');
                $(this).removeClass('invalid');
                

            } else {
                $(this).addClass('invalid');
                $('.message-cpf').text('CPF inválido!');
                $('.message-cpf').css('color', 'red');
            }
        } else {
            $(this).removeClass('invalid');
            $('.message-cpf').text('');
        }
    });

    $('.cep').on('input', function () {
        var cep = $(this).val().replace(/\D/g, '');
        if (cep.length === 8) {
            $.ajax({
                url: 'https://viacep.com.br/ws/' + cep + '/json/',
                dataType: 'json',
                success: function (data) {
                    if (!data.erro) {
                        // CEP válido
                        $('.cep').removeClass('invalid-cep');
                        $('.message-cep').text('Endereço Prenchido!');
                        $('.message-cep').css('color', 'green');
                        $('.rua').val(data.logradouro);
                        $('.bairro').val(data.bairro);
                        $('.cidade').val(data.localidade);
                        $('.estado').val(data.uf);
                        $('.numero').focus();
                    } else {
                        // CEP inválido
                        $('.cep').addClass('invalid-cep');
                        $('.message-cep').text('CEP inválido!');
                        $('.message-cep').css('color', 'red');
                    }
                },
                error: function () {
                    // Erro na requisição
                    $('.message-cep').text('Erro ao consultar o CEP. Tente novamente mais tarde.');
                    $('.message-cep').css('color', 'red');
                }
            });
        } else {
            // CEP inválido
            $('.cep').addClass('invalid-cep');
            $('.message-cep').text('CEP inválido!');
            $('.message-cep').css('color', 'red');
        }
    });

    $('form').on('submit', function (event) {

        if ($('.cep').length > 0) {
            var cep = $('.cep').val().replace(/\D/g, '');
            if (cep.length !== 8 || $('.cep').hasClass('invalid-cep')) {
                event.preventDefault(); // Impede o envio do formulário
                alert('CEP inválido!');
                return false;
            }
        }

        if ($('.cpf').length > 0) {
            var cpf = $('.cpf').val();
            if (!validarCPF(cpf)) {
                event.preventDefault(); // Impede o envio do formulário
                alert('CPF inválido!');
                return false;
            }
        }

        if ($('input').hasClass('invalid')) {
            event.preventDefault();
            alert('Campo está inválido!');
            return false;
        }
    });

    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            return false;
        }
        var soma = 0;
        var resto;
        for (var i = 1; i <= 9; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(9, 10))) {
            return false;
        }
        soma = 0;
        for (var i = 1; i <= 10; i++) {
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(10, 11))) {
            return false;
        }
        return true;
    }

    $('#ajaxselectPaciente').select2({
        placeholder: "Selecione um Paciente",
        ajax: {
            url: pacientesSearchUrl,
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    nome: params.term,
                }
            },
            processResults: function (data, params) {
                return {
                    results: data
                }
            },
            cache: true
        }
    });

    $('#ajaxselectMedico').select2({
        placeholder: "Selecione um Médico",
        ajax: {
            url: medicosSearchUrl,
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    nome: params.term
                }
            },
            processResults: function (data, params) {
                return {
                    results: data,
                }
            },
            cache: true
        }
    });
});




